import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ApplicationEmailProps {
  invitationCode: string;
  isUsOrCanada: string;
  region?: string;
  locale?: "en" | "fil";
  firstName: string;
  lastName: string;
  dobMonth: string;
  dobYear: string;
  email: string;
  tiktokUsername: string;
  onlyTiktokAccount: string;
  streamingFrequency: string;
  contentNiche: string;
  contentNicheOther?: string;
  discordUsername: string;
}

export const ApplicationEmail = (props: ApplicationEmailProps) => {
  const isFil = props.locale === "fil";
  const copy = {
    preview: isFil ? "Bagong Creator Application mula kina" : "New Creator Application from",
    heading: isFil ? "Bagong Creator Application" : "New Creator Application",
    intro: isFil ? "May bagong application para sa Dino Network." : "You have received a new application for Dino Network.",
    invitation: isFil ? "1. Invitation Code:" : "1. Invitation Code:",
    region: isFil ? "2. Rehiyon:" : "2. Region:",
    basic: isFil ? "3. Basic Information:" : "3. Basic Information:",
    name: isFil ? "Pangalan" : "Name",
    dob: isFil ? "DOB" : "DOB",
    email: isFil ? "Email" : "Email",
    tiktok: isFil ? "4. TikTok Username:" : "4. TikTok Username:",
    only: isFil ? "5. Only TikTok Account:" : "5. Only TikTok Account:",
    freq: isFil ? "6. Streaming Frequency:" : "6. Streaming Frequency:",
    niche: isFil ? "7. Content Niche:" : "7. Content Niche:",
    discord: isFil ? "8. Discord Username:" : "8. Discord Username:",
    footer: isFil
      ? "Na-submit sa Dino Network Application Form."
      : "Submitted via Dino Network Application Form.",
  };

  return (
    <Html>
      <Head />
      <Preview>
        {copy.preview} {props.firstName} {props.lastName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{copy.heading}</Heading>
          <Text style={text}>{copy.intro}</Text>
          <Hr style={hr} />
          
          <Section>
            <Text style={label}>{copy.invitation}</Text>
            <Text style={value}>{props.invitationCode}</Text>
            
            <Text style={label}>{copy.region}</Text>
            <Text style={value}>{props.isUsOrCanada || props.region || "—"}</Text>
            
            <Text style={label}>{copy.basic}</Text>
            <Text style={value}>
              {copy.name}: {props.firstName} {props.lastName}<br />
              {copy.dob}: {props.dobMonth} {props.dobYear}<br />
              {copy.email}: {props.email}
            </Text>
            
            <Text style={label}>{copy.tiktok}</Text>
            <Text style={value}>@{props.tiktokUsername}</Text>
            
            <Text style={label}>{copy.only}</Text>
            <Text style={value}>{props.onlyTiktokAccount}</Text>
            
            <Text style={label}>{copy.freq}</Text>
            <Text style={value}>{props.streamingFrequency}</Text>
            
            <Text style={label}>{copy.niche}</Text>
            <Text style={value}>
              {props.contentNiche}
              {props.contentNicheOther ? <> – {props.contentNicheOther}</> : null}
            </Text>
            
            <Text style={label}>{copy.discord}</Text>
            <Text style={value}>{props.discordUsername}</Text>
          </Section>
          
          <Hr style={hr} />
          <Text style={footer}>
            {copy.footer} Timestamp: {new Date().toISOString()}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f8f7",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginTop: "40px",
};

const h1 = {
  color: "#0f172a",
  fontSize: "24px",
  fontWeight: "700",
  padding: "0",
  margin: "30px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};

const label = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "20px 0 4px 0",
};

const value = {
  color: "#0f172a",
  fontSize: "16px",
  margin: "0 0 16px 0",
  padding: "12px",
  backgroundColor: "#f8fafc",
  borderRadius: "6px",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "20px 0",
};

const footer = {
  color: "#94a3b8",
  fontSize: "12px",
};
