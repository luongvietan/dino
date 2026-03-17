# 1. Project Overview

Build a fully functional multi-page website for **Dino Network** (TikTok LIVE Creator Agency).

This is **NOT** a simple landing page. It must include:

- Full responsive design (mobile-first)
- Working multi-step application form
- Scroll animations
- Video integration
- Clean, modern UI
- 100% functional form submission (email delivery)

**Primary goal:** Convert visitors into qualified creator applications.

This is a service-based recruitment website (not e-commerce).

---

# 2. Core Functional Requirements

## 2.1 Global Requirements

- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling behavior
- Scroll-triggered section animations (fade/slide)
- Fast loading performance
- SEO-ready structure
- Secure form handling
- **Email delivery must work 100%**

---

# 3. TAB 1 — HOME

## 3.1 Navigation & CTAs

- **Top-right primary button:** Join Now  
  - Redirect → Creator Application Form
- **Remove** “Watch Demo” button entirely
- **Mid-page primary CTA:**
  - Text: *Join the Dino Family*
  - Redirect → Creator Application Form

## 3.2 Video Section

- Add video section explaining: **“What is a TikTok LIVE Agency?”**
- Must be placed **BEFORE:** “Why Creators Choose Dino Network”
- Client will provide video file
- Optimized for performance

## 3.3 Section: Why Creators Choose Dino Network

- **Title** must display exactly: *Why Creators Choose Dino Network*
- **Content:**
  - Dino Network was built by a streamer who understands the creator's journey firsthand. Having streamed myself, I know the challenges, pressure, and dedication it takes to grow on TikTok LIVE.
  - I've seen too many creators join random agencies only to experience slow responses, lack of support, and poor guidance when they needed help the most. That's exactly why Dino Network was created — to be a creator-first network that actually cares.
  - We focus on account protection, real engagement, and proven LIVE growth systems, all with the same shared goal: helping creators grow safely, earn consistently, and build something long-term — together.
- Include scroll-trigger animation
- Original layout (do not copy reference site)

## 3.4 Section: What Dino Network Provides

- **Intro Text:** Hands-on support, account protection, and proven LIVE strategies to help creators grow safely and earn consistently.
- **Benefits** (must use original icons & layout):
  - TikTok Partner Agency — Growth, compliance, monetization
  - 1-on-1 Coaching & Growth Tips
  - Live Ban Assistance
  - Exclusive Perks & TikTok Events
  - Live Pro Badge & Stream Key
  - Community Discord Server
- Icons must be unique and not resemble reference websites.

## 3.5 Section: What Makes Dino Network Stand Out

- **Title** must display exactly: *What Makes Dino Network Stand Out*
- Unique wording
- Different layout from reference sites
- Scroll-trigger animation enabled

## 3.6 Testimonials Section

- **Title:** The Dino Family Speaks
- **Subtitle:** See what creators say about being part of a network that truly supports them.
- Each testimonial must include:
  - Creator username (clickable)
  - Link to TikTok profile
  - Display niche (Gaming Streamer, Live Battler, etc.)
  - Professional, clean styling

**Creators:**

| Username    | Niche           | Profile                    |
|------------|-----------------|----------------------------|
| @huntski0  | Gaming Streamer | https://www.tiktok.com/@huntski0 |
| @jona_breton | Live Battler  | https://www.tiktok.com/@jona_breton |
| @billyswilly | Gaming Streamer | https://www.tiktok.com/@billyswilly |

*(Full testimonial texts implemented exactly as provided.)*

---

# 4. TAB 2 — CREATOR PATHWAY

- Must include **dropdown menu:**
  - Getting Started
  - Invitation Code
  - Accept Invitation
- **Primary purpose:** Guide user into Creator Application flow.

---

# 5. CREATOR APPLICATION FLOW

- **Trigger:** Clicking “Join Now” redirects to application form.
- **UX Style:** Typeform-style experience (one question per screen).
- Reference UX behavior only (not visual copy).

---

# 6. APPLICATION FORM STRUCTURE

All fields **required** unless stated otherwise.

## 6.1 Landing Screen

- **Title:** Creator Application
- **Subtitle:** Welcome to the Dino Family
- **Tagline:** This is where your future starts.
- **CTA:** Begin
- **Note:** Takes 1 minute

## 6.2 Question 1 — Invitation Code

- **Field:** Invitation Code
- **Instructions:** Profile → Menu → TikTok Studio → Live Center → Tools and Resources → Join Creator Network → How to Join
- **Validation:**
  - Exactly 7 characters
  - Required
- **Error message:** “Invitation code must be exactly 7 characters long.”

## 6.3 Question 2 — Location Qualification

- **Question:** Are you located in the United States or Canada?
- **Options:** Yes | No
- **Logic:** If “No” → immediately end form with message:
  - *“Sorry, but you do not qualify for our LIVE Agency. We are only accepting creators based in the United States or Canada.”*

## 6.4 Question 3 — Basic Information

- **Intro Text:** Hey! 🦖 Please answer a few quick questions so we can learn more about you.
- **Fields:**
  - First Name
  - Last Name
  - Date of Birth (Month & Year only)
  - Email Address

## 6.5 Question 4 — TikTok Username

- **Dynamic Greeting:** Nice to meet you, {First Name}
- **Question:** What is your TikTok username?
- **Placeholder:** `dinonetworkus`
- Required

## 6.6 Question 5 — Account Confirmation

- **Question:** Is this your only TikTok account?
- **Options:** Yes | No
- Required

## 6.7 Question 6 — Streaming Frequency

- **Question:** How often do you go LIVE on TikTok?
- **Options:** Daily | Weekly | Monthly | I do not go LIVE at all
- Required

## 6.8 Question 7 — Content Niche

- **Options:** Gaming | Battler | Musician | Dancer | Fitness
- Required

## 6.9 Question 8 — Discord Username

- **Field:** Discord Username
- **Helper:** Enter your Discord username (example: `username#1234`)
- Required

## 6.10 Final Screen

- **Message:** 🎉 Thank you so much for your application!
- **Next Steps:** Join our Discord server and open an Application Ticket once the form is completed.
- **Discord Link:** `discord.gg/DinoNetwork`

---

# 7. Form Handling

All submissions must:

- Send structured email to client
- Include timestamp
- Include all fields
- Spam protection required
- Confirmation screen required
- **Must work 100%**

---

# 8. Admin Dashboard (Not Included in Phase 1)

Current build does **NOT** include admin dashboard.

If implemented in future, dashboard would typically include:

- Application management panel
- Filter/search system
- Status tagging (New / Reviewing / Approved / Rejected)
- Export to CSV
- Content editing capability
- Basic analytics overview

Dashboard would require separate backend system and separate pricing.

---

# 9. Performance & Quality Standards

- Mobile-first approach
- Smooth animations (not excessive)
- Professional branding
- No template copying
- Optimized performance
- Clean structured codebase
