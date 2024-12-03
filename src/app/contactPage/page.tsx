"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";

interface EmailTemplate {
  htmlContent: string;
}

export default function EmailTemplateViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState<EmailTemplate | null>(
    null
  );

  const mockFetchTemplate = () => {
    // Simulating API call to fetch the template
    setTimeout(() => {
      setEmailTemplate({
        htmlContent: `
          <p>«Full_Name»</p>
          <p>«Business»</p>
          <p>«Address_Line_1»</p>
          <p>«City_State_ZIP»</p>
          <p></p>
          <p><a id="_Hlk11139177"></a></p>
          <p>{{greeting}}</p>
          <p><br />My name is Dr. Dariush Adli. I am an attorney and President of ADLI Law Group. In addition to a J.D. in Law, I have a science and engineering background, with a B.S. degree in Physics/Math and M.S. and Ph.D. degrees in Nuclear Engineering from the University of Michigan. We obtained this information from public records, according to which you, or someone with a similar name, is a party to this lawsuit. If you have an attorney or if this case does not concern you, please disregard this letter. If you do not wish to receive such communications from us in the future, please let us know.</p>
          <p>ADLI Law was established in 2010 and is now proudly in its fifteenth year of serving its clients. We offer legal services in several areas of law, including Intellectual Property (Patent, Trademark and Copyright) Litigation and Acquisition, Business Litigation and Transaction, Labor &amp; Employment, Real Estate and Product Liability.</p>
          <p>Since its founding, ADLI's focus has focused on recruiting top legal talent and providing first rate services to clients at a reasonable price combined with the personal attention they deserve. In that regard, our attorneys are credited with over 50 articles in prestigious legal publications. Our team of top attorneys ensures that you and your business are kept in the foreground.</p>
          <p>If you need representation or would like a consultation to discuss your options, we are here to help. For a free consultation call (213) 623-6547 or email me at <a href="mailto:adli@adlilaw.com">adli@adlilaw.com</a>.</p>
          <p></p>
          <p>Please note that this letter is a solicitation and does not establish an attorney-client relationship between us.</p>
          <p></p>
          <table>
            <tr>
              <td><p>{{plaintiff}} v. {{defendant}} {{number}}</p></td>
              <td><p>{{summary}}</p></td>
              <td><p>«Full_Name»</p></td>
            </tr>
          </table>
          <p><a id="Closing"></a>Sincerely,</p>
          <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" alt="Signature" /></p>
          <p><a id="FromFullName"></a>Dr. Dariush G. Adli, Ph.D; Esq.</p>
        `,
      });
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={mockFetchTemplate}>
          <Mail className="mr-2 h-4 w-4" />
          View Email Template
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] sm:h-[80vh]">
        <DialogHeader>
          <DialogTitle>Email Template</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full w-full rounded-md border p-4">
          {emailTemplate ? (
            <div
              dangerouslySetInnerHTML={{ __html: emailTemplate.htmlContent }}
              className="prose prose-sm max-w-none"
            />
          ) : (
            <p>Loading email template...</p>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
