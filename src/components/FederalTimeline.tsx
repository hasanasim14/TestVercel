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
      <h2
        className="text-3xl font-bold mb-2"
        style={{ color: props.textcolor }} // Apply the dynamic text color
      >
        Federal Litigation Timeline
      </h2>
      <p
        className="text-xl"
        style={{ color: props.textcolor }} // Apply the dynamic text color
      >
        Key Stages and Deadlines
      </p>
      <Timeline>
        {/* Complaint Filed */}
        <TimelineItem position="left">
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

          {/* <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Complaint Served
            </Typography>
            <Typography>
              Complaint and summons must be within{" "}
              <Typography component="span" fontWeight="bold">
                90 days
              </Typography>{" "}
              of filing.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              [FRCP Rule 4(m)]
            </Typography>
          </TimelineContent>
          */}
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
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
            <Typography>Extended to 60 days if service waived.</Typography>
            <Typography style={{ fontWeight: "bold" }}>[FRCP 12(a)]</Typography>
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
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
            <Typography>
              Parties exchange interrogatories, requests for production, and
              depositions.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Discovery period: Typically 3-5 months.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Depositions */}
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
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
              Employer or Defendant may file a motion to dismiss the case based
              on evidence.
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
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
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
              If <span style={{ fontWeight: "bold" }}>motion denied</span>, case
              proceeds to trial.
            </Typography>
            <Typography>
              If <span style={{ fontWeight: "bold" }}>granted</span>, Plaintiff
              may appeal.
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
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
              Post-Trial Motions
            </Typography>
            <Typography>
              Motions for a new trial or judgment as a matter of law.
            </Typography>
            <Typography>
              [FRCP 50,59]
              <span style={{ fontWeight: "bold" }}>
                Filed within 28 days after judgment
              </span>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Appeals */}
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
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: props.textcolor }}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Appeals
            </Typography>
            <Typography>
              Appeal filed to a higher court if summmary judgment granted or
              after trial.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Appeal deadlines: ~30 days after judgment [FRAP Rule 4]
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
