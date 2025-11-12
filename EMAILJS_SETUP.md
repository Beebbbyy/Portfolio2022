# EmailJS Contact Form Setup Guide

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to configure it:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Set Up Email Service

1. Go to the [Email Services](https://dashboard.emailjs.com/admin/integration) page
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to the [Email Templates](https://dashboard.emailjs.com/admin/templates) page
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}
```

4. Set the "To Email" to your email address (lacsonrica@gmail.com)
5. Save the template and note your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to [Account Settings](https://dashboard.emailjs.com/admin/account)
2. Find your **Public Key** (e.g., `aBcDeFgHiJkLmNoPq`)

## Step 5: Update Configuration

Open `assets/js/script.js` and replace the placeholder values:

```javascript
// Line 279: Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY');

// Line 305: Replace with your Service ID and Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

**Example:**
```javascript
emailjs.init('aBcDeFgHiJkLmNoPq');

emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Step 6: Test the Form

1. Open `index.html` in your browser
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email for the test message

## Troubleshooting

### Form not sending
- Check browser console for errors (F12)
- Verify all IDs are correct
- Ensure EmailJS service is active

### Not receiving emails
- Check spam folder
- Verify email address in template settings
- Check EmailJS dashboard for delivery status

### Rate limit exceeded
- Free plan: 200 emails/month
- Upgrade to paid plan if needed
- Consider adding rate limiting on frontend

## Alternative Options

If you prefer a different solution:

1. **Formspree**: Simpler setup, just change form action
2. **Netlify Forms**: Built-in if deploying to Netlify
3. **Custom Backend**: Node.js + Nodemailer for full control

## Security Notes

- Never commit API keys to public repositories
- EmailJS public key is safe for frontend use
- Consider adding reCAPTCHA to prevent spam
- Rate limiting is handled by EmailJS

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
