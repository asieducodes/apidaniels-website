from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

app = FastAPI(
    title="Apidaniels Auto & Trade API",
    description="Simple contact form API",
    version="1.0.0"
)

# CORS
origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    phone: str
    email: Optional[EmailStr] = None
    message: str

def send_email_notification(form: ContactForm):
    """Send email notification using Gmail"""
    try:
        # Get email settings from environment variables
        gmail_user = os.getenv("GMAIL_USER")
        gmail_password = os.getenv("GMAIL_APP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL", "apidanielsautoandtradellc@gmail.com")
        
        if not gmail_user or not gmail_password:
            print("⚠️ Gmail credentials not configured")
            print("   Set GMAIL_USER and GMAIL_APP_PASSWORD in environment")
            return False
        
        # Create email message
        message = MIMEMultipart("alternative")
        message["From"] = f"Apidaniels Website <{gmail_user}>"
        message["To"] = receiver_email
        message["Subject"] = f"🚗 New Customer Inquiry - {form.name}"
        
        # HTML email body
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; }}
        .container {{ max-width: 600px; margin: 0 auto; }}
        .header {{ background: linear-gradient(135deg, #003D7A 0%, #0056b3 100%); 
                    color: white; padding: 30px; text-align: center; }}
        .content {{ padding: 30px; background: #ffffff; }}
        .detail-box {{ background: #f8f9fa; padding: 20px; 
                       border-left: 4px solid #E63946; margin: 20px 0; border-radius: 5px; }}
        .detail-row {{ margin: 12px 0; font-size: 16px; }}
        .label {{ font-weight: bold; color: #003D7A; }}
        .message-box {{ background: #fff; padding: 20px; 
                        border: 2px dashed #003D7A; border-radius: 5px; margin: 20px 0; }}
        .button {{ display: inline-block; background: #25D366; color: white; 
                   padding: 15px 30px; text-decoration: none; border-radius: 8px; 
                   font-weight: bold; margin: 20px 0; }}
        .footer {{ background: #003D7A; color: white; padding: 20px; 
                   text-align: center; font-size: 14px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">🚗 New Lead Received!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Apidaniels Auto & Trade LLC</p>
        </div>
        
        <div class="content">
            <h2 style="color: #003D7A; margin-top: 0;">Contact Form Submission</h2>
            
            <div class="detail-box">
                <div class="detail-row">
                    <span class="label">👤 Customer Name:</span><br>
                    <span style="font-size: 18px;">{form.name}</span>
                </div>
                <div class="detail-row">
                    <span class="label">📱 Phone Number:</span><br>
                    <a href="tel:{form.phone}" style="color: #E63946; font-size: 18px; text-decoration: none;">
                        {form.phone}
                    </a>
                </div>
                <div class="detail-row">
                    <span class="label">📧 Email Address:</span><br>
                    <span style="font-size: 16px;">{form.email or 'Not provided'}</span>
                </div>
            </div>
            
            <div class="message-box">
                <h3 style="color: #003D7A; margin-top: 0;">💬 Customer Message:</h3>
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">
                    {form.message}
                </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="https://wa.me/{form.phone.replace('+', '').replace(' ', '').replace('-', '')}" 
                   class="button">
                    💬 Reply via WhatsApp
                </a>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p style="margin: 5px 0; font-size: 13px; color: #666;">
                    <strong>Quick Actions:</strong>
                </p>
                <p style="margin: 5px 0; font-size: 13px;">
                    📞 Call: <a href="tel:{form.phone}">{form.phone}</a>
                </p>
                {f'<p style="margin: 5px 0; font-size: 13px;">📧 Email: <a href="mailto:{form.email}">{form.email}</a></p>' if form.email else ''}
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 5px 0;">This inquiry was submitted via your website contact form</p>
            <p style="margin: 5px 0; opacity: 0.8;">
                Apidaniels Auto & Trade LLC | Quality Cars from USA & Canada
            </p>
        </div>
    </div>
</body>
</html>
        """
        
        # Plain text version (fallback)
        text_content = f"""
New Contact Form Submission - Apidaniels Auto & Trade LLC

Customer Details:
-----------------
Name:  {form.name}
Phone: {form.phone}
Email: {form.email or 'Not provided'}

Message:
--------
{form.message}

---
Reply via WhatsApp: https://wa.me/{form.phone.replace('+', '').replace(' ', '').replace('-', '')}

This message was sent from your website contact form.
        """
        
        # Attach both HTML and plain text versions
        part1 = MIMEText(text_content, "plain")
        part2 = MIMEText(html_content, "html")
        message.attach(part1)
        message.attach(part2)
        
        # Send email via Gmail SMTP
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(gmail_user, gmail_password)
            server.send_message(message)
        
        print("✅ Email sent successfully to", receiver_email)
        return True
        
    except smtplib.SMTPAuthenticationError:
        print("❌ Gmail authentication failed - Check your app password")
        return False
    except Exception as e:
        print(f"❌ Email sending failed: {str(e)}")
        return False

@app.get("/")
def root():
    return {"message": "Apidaniels API is running!", "status": "ok"}

@app.post("/contact")
def submit_contact_form(form: ContactForm):
    # Always log to console (backup method)
    print("\n" + "="*70)
    print("📧 NEW CONTACT FORM SUBMISSION")
    print("="*70)
    print(f"Name:    {form.name}")
    print(f"Phone:   {form.phone}")
    print(f"Email:   {form.email or 'Not provided'}")
    print(f"Message: {form.message}")
    print("="*70 + "\n")
    
    # Send email notification
    email_sent = send_email_notification(form)
    
    if email_sent:
        print("✅ Email notification sent successfully!")
    else:
        print("⚠️ Email not sent - Check logs above for error details")
    
    # Always return success to user
    return {
        "status": "success", 
        "message": "Thank you! We will contact you soon."
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}