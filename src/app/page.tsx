import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ShinyButton } from "@/components/shiny-button";
import { Check } from "lucide-react";
import React from "react";

const MainPage = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Resume Builder Ultimate</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Build AI Powered Professional Resumes in under 2 mins
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Resume builder ultimate is the elegant way to create professional
              resumes in under 2 mins irrespective of who you are...{" "}
              <span className="font-semibold text-gray-700">
                Sr. Executive, experience professional, or college fresher
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Hunderds of templates to choose from",
                "Customise your resume with ease",
                "AI powered resume generator",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="text-center">
          <div>Section 2 goes here</div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="text-center">
          <div>Section 3 goes here</div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="text-center">
          <div>Section 4 goes here</div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="text-center">
          <div>Section 5 goes here</div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default MainPage;
