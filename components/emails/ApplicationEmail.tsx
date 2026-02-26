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
  firstName: string;
  lastName: string;
  dobMonth: string;
  dobYear: string;
  email: string;
  tiktokUsername: string;
  onlyTiktokAccount: string;
  streamingFrequency: string;
  contentNiche: string;
  discordUsername: string;
}

export const ApplicationEmail = (props: ApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Creator Application from {props.firstName} {props.lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Creator Application</Heading>
          <Text style={text}>You have received a new application for Dino Network.</Text>
          <Hr style={hr} />
          
          <Section>
            <Text style={label}>1. Invitation Code:</Text>
            <Text style={value}>{props.invitationCode}</Text>
            
            <Text style={label}>2. US/Canada Location:</Text>
            <Text style={value}>{props.isUsOrCanada}</Text>
            
            <Text style={label}>3. Basic Information:</Text>
            <Text style={value}>
              Name: {props.firstName} {props.lastName}<br />
              DOB: {props.dobMonth} {props.dobYear}<br />
              Email: {props.email}
            </Text>
            
            <Text style={label}>4. TikTok Username:</Text>
            <Text style={value}>@{props.tiktokUsername}</Text>
            
            <Text style={label}>5. Only TikTok Account:</Text>
            <Text style={value}>{props.onlyTiktokAccount}</Text>
            
            <Text style={label}>6. Streaming Frequency:</Text>
            <Text style={value}>{props.streamingFrequency}</Text>
            
            <Text style={label}>7. Content Niche:</Text>
            <Text style={value}>{props.contentNiche}</Text>
            
            <Text style={label}>8. Discord Username:</Text>
            <Text style={value}>{props.discordUsername}</Text>
          </Section>
          
          <Hr style={hr} />
          <Text style={footer}>
            Submitted via Dino Network Application Form. Timestamp: {new Date().toISOString()}
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
