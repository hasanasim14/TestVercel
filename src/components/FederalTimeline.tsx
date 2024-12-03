import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

interface FederalTimelineProps {
  timelineiconcolor: string;
  textcolor: string;
}

export default function FederalTimeline(props: FederalTimelineProps) {
  return (
    <div>
      <h1>Federeal Timeline</h1>
      <Timeline>
        {/* Complaint Filed */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Complaint Filed
            </Typography>
            <Typography>
              Plaintiff files a complaint outlining facts and legal basis
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Deadline:</span> Statute of
              Limitations (varies by case type)
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Complaint Served */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Complaint Served
            </Typography>
            <Typography>
              Complaint and summons must be within 90 days of filing.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              [FRCP Rule 4(m)]
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Answer or Motion to Dismiss */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Answer or Motion to Dismiss
            </Typography>
            <Typography>
              Defendant files an Answer or a Motion to Dismiss within 21 days of
              service.
            </Typography>
            <Typography>
              Extended to 60 days if service waived.
              
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              [FRCP 12(a)]
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Court Decision on Motion */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Court Decision on Motion
            </Typography>
            <Typography>
              Court rules on Motion to Dismiss (time varies by case and court).
            </Typography>
             <Typography style={{ fontWeight: "bold" }}>
                If denied, the case moves to discovery.
            </Typography>
            
          </TimelineContent>
        </TimelineItem>

        {/*  Pre-Trial Discovery Begins */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Pre-Trial Discovery Begins
            </Typography>
            <Typography>Parties exchange interrogatories, requests for production, and depositions.</Typography>
             <Typography style={{ fontWeight: "bold" }}>Discovery period: Typically 3-5 months.</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Depositions */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Depositions
            </Typography>
            <Typography>
              Witnesses deposed under oath: transcripts must be purchased.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
                Cost: ~$1000 per deposition day.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Discovery Complete */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </TimelineDot>

            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Discovery Complete
            </Typography>
            <Typography>
             All discovery must be completed by court-set deadlines.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
                (Typically 6 months)
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/*  Motion for Summary Judgment */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
             Motion for Summary Judgment
            </Typography>
            <Typography>
              Employer or Defendant may file a motion to dismiss the case based on evidence.
            </Typography>
             <Typography style={{ fontWeight: "bold" }}>
                Filed after discovery completion.
            </Typography>
            
          </TimelineContent>
        </TimelineItem>

        {/* Court Decision on Summary Judgment  */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
            Court Decision on Summary Judgment
            </Typography>
            <Typography>
              If <span style={{fontWeight:'bold'}}>motion denied</span>, case proceeds to trial. 
            </Typography>
            <Typography>
              If <span style={{fontWeight:'bold'}}>granted</span>, Plaintiff may appeal. 
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Trial */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Trial
            </Typography>
            <Typography>
            Trial scheduled by court; dates may vary by jurisdiction.
            </Typography>
             <Typography style={{ fontWeight: "bold" }}>
            Federal trials may take 1-3 years after filing.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/*  Post-Trial Motions */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              2nd Exchange of Experts
            </Typography>
            <Typography>
              Typically set by judge at CMC. Within 20 days of the 1st Exchange.
              You may only designate an additional expert on a topic already
              designated in your opponent&apos;s 1st Exchange.{" "}
              <span style={{ fontWeight: "bold" }}>[CCP §2034.280]</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Expert Deposition(s) */}
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Expert Deposition(s)
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Motion Discovery Cutoff */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Motion Discovery Cutoff
            </Typography>
            <Typography>
              Discovery closes 30 days before trial, or 15 days before
              arbitration, Discovery motions must be heard no less than 15 days
              before trial.{" "}
              <span style={{ fontWeight: "bold" }}>[CCP §2024.020]</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Mediation */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Mediation
            </Typography>
            <Typography>
              Approximately 80% of cases resolve through Mediation (the parties
              are free to mediate at any time)
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Trial Readiness Conference (TRC) */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Trial Readiness Conference (TRC)
            </Typography>
            <Typography>
              Typically set by judge at CMC. Occurs about 2-3 weeks before the
              trial. Parties must file a TRC Report.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Trial */}
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: props.timelineiconcolor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                />
              </svg>
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Trial
            </Typography>
            <Typography>
              {" "}
              In San Diego, the trial date on a civil matter is typically on a
              Friday, known as &apos;Trial Call.&apos; Your actual trial may
              commence the following Monday.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
