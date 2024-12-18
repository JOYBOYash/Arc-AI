// pages/index.js
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Animations.module.css";
import Card from "@/app/components/Card";
import FaqQues from "@/app/components/FaqQues";
import {
  ArrowBigDown,
  ArrowRight,
  ArrowLeft,
  CornerDownRight,
  CornerDownLeft,
  HandCoins,
  Medal,
} from "lucide-react";
import Illustrations from "@/app/components/Illustrations";
import Referrals from "@/app/components/Referrals";
import Footer from "@/app/components/Footer";

export default function Homepage() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center gap-4">
      {/* HERO */}
      <div className="mt-12 flex flex-col bg-gray-600/20 backdrop-blur p-12 border-2 rounded-2xl border-green-400/70 gap-4 items-center ">
        <div className="w-[1200px] text-center rounded-3xl gap-4 flex-col border-2 border-gray-300 p-4 flex content-center items-center items-center justify-center backdrop-blur-3xl bg-slate-900/10 h-96 text-left justify-center m-2">
          <h1 className="text-5xl font-bold flex items-center text-center ml-[15px] content-center text-white">
            Welcome Aboard!
          </h1>
          <p className="text-slate-400 text-2xl">
            We are happy to present you,{" "}
            <span className="text-3xl bg-clip-text">Arc!</span> <br />
            Here you can get personalized course plans for any skill/domain.{" "}
            <br />
            Hop aboard on your path to upskill right now - <br />{" "}
          </p>
          <div className="flex">
            <a
              href="/pages/login"
              className="text-2xl transition hover:bg-green-800 ease-in-out bg-green-600/80 rounded-full p-4 hover:animate-none animate-pulse font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white"
            >
              Login Now! <br />{" "}
            </a>
            <a
              href="/pages/register"
              className="text-2xl transition ease-in-out underline hover:underline-offset-2  hover:text-green-600 rounded-full p-4 font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white"
            >
              Register <br />{" "}
            </a>
          </div>
        </div>
        <div className="flex w-[1200px] gap-4">
          <Card
            title="Google's Gemini AI"
            description="Our app leverages Google's very own Gemnini Ai APi to give you personalized course plans."
          ></Card>
          <Card
            title="Save & Manage Plans"
            description="Liked a Course plan & Wanna share it with your friends? - Save your favourite course plan get regular reminders!"
          ></Card>
          <Card
            title="Personalized Courses"
            description="The courses  recommended to you are specifically personalized to your requirements and knowledge level."
          ></Card>
        </div>
      </div>
      {/* BENTO */}
      <div className="flex-col w-full gap-4 items-center">
        <h1 className="text-3xl transition ease-in-out animate-bounce font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white">
          Explore More <br />{" "}
          <ArrowBigDown className="w-8 h-8 text-green-500" />
        </h1>

        <div className="w-full mb-12 flex-col mt-24 flex w-full bg-gray-600/20 backdrop-blur p-12 border-y-2 border-green-400/70 gap-4 items-center">
          <h1 className="text-2xl transition ease-in-out mb-14 rounded-full p-4font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white">
            Answer Three Questions & let our app do it's work! <br />{" "}
          </h1>

          <div className="flex ">
            <div className="flex-col ml-24 gap-4">
              <h1 className=" p-6 m-4 border-2 bg-green-600/90 gap-2  text-black font-bold rounded-lg items-center flex h-12 text-center">
                {" "}
                Take our Simple Survey <br />
                <ArrowRight className="w-6 h-6 text-black font-bold" />
              </h1>
              <h1 className=" p-6 m-4 border-2 bg-green-600/90 rounded-lg text-black font-bold items-center w-[300px] text-wrap flex h-22 text-center">
                {" "}
                These three questrions let us analyse and provide best course
                for you! <br />
              </h1>
            </div>

            <div className="flex w-[1200px] gap-4">
              <Card
                title="Learning Goals"
                description="The skill or domain you want to pursue. We provide course plans & resources for a wide range of skills."
              ></Card>
              <Card
                title="Current Level"
                description="Your current level of proficiency in the domain whether you're a beginner, intermediate or expert."
              ></Card>
              <Card
                title=" Learning Frequency "
                description="The amount of time you are available for committing towards course completion or before the D-day!"
              ></Card>
            </div>
          </div>

          <div className="flex pl-32 ">
            <div className="flex w-[1200px] gap-4">
              <Card
                title="Learning Path"
                description="We'll provide a distinct path that's uniqie for you! Choose what suits you as we cater for everyone based on their own learning pace."
              ></Card>
              <Card
                title="Resourcefulness"
                description="We just won't give you a path and leave you there, we'll also give you all ref / vid resources required to  walk that path!"
              ></Card>
              <Card
                id="down"
                title="Regular Grind"
                description="You're not alone! We're there to constantly keep you on the track and help you reach your goal."
              ></Card>
            </div>

            <div className="flex-col gap-4">
              <h1 className=" p-6 m-4 border-2 bg-green-600/90 gap-2  text-black font-bold rounded-lg items-center flex h-12 text-center">
                {" "}
                <ArrowLeft className="w-6 h-6 text-black font-bold" />
                Trust our easy process <br />
              </h1>
              <h1 className=" p-6 m-4 border-2 bg-green-600/90 rounded-lg text-black font-bold items-center w-[300px] text-wrap flex h-22 text-center">
                {" "}
                These three steps are always taken to assure you best & safe
                experience. <br />
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ILLUSTRATIONS */}
      <div className="flex flex-col gap-12">
        <h1 className="text-3xl gap-2 transition ease-in-out animate-pulse font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white">
          What "Arc" Offers you !<br />{" "}
          <HandCoins className="w-8 mt-2  h-8 text-green-500" />
        </h1>
        <div className="flex gap-16">
          <div className="">
            <Illustrations title="Plan & Resources" image="./study.png" />
          </div>
          <CornerDownRight className="mt-[350px] icon text-xl" />
          <div className="mt-24">
            <Illustrations title="Mastery" image="./win.png" />
          </div>
          <CornerDownLeft className="mt-[350px] " />
          <div className="">
            <Illustrations title="Track Progress" image="./progress.png" />
          </div>
        </div>
      </div>
      {/* REFERALS */}
      <div className="flex-col items-center border-2 mb-40 border-green-600/70 p-6">
        <h1 className="text-3xl transition ease-in-out animate-pulse font-bold flex flex-col items-center text-center ml-[00px] mb-[-10px] ml-[0px] content-center text-white">
          Our users love <span className="text-green-600/80">Arc!</span> <br />{" "}
          {/* <Medal className="w-8 h-8 text-green-500" /> */}
        </h1>

        <div className={styles["marquee-container"]}>
          <div className={styles["marquee-content"]}>
            <div className={styles["marquee-items"]}>
              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>
            </div>
            <div className={styles["marquee-items"]}>
              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>

              <div className={styles["marquee-item"]}>
                <Referrals
                  title="John Doe"
                  description="I love this app!"
                  dgn="Senior Dev Google"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/pages/login"
          className="text-2xl w-60 ml-[1220px] transition hover:bg-green-800 ease-in-out bg-green-600/80 rounded-full p-4 hover:animate-none animate-pulse font-bold flex flex-col items-center text-center mt-12 ml-[0px] content-center text-white"
        >
          Sign-Up Now! <br />{" "}
        </a>
        <p className="ml-[00px] mt-4 items-center text-center flex-col">
          {" "}
          The Beta testing for the app was a grand success and people really
          loved our app! <br /> Sign up now and get your first course plan for
          <span className="text-white text-bold"> FREE!</span>
        </p>
      </div>
      {/* FAQ */}
      <div className="w-[1800px] p-[50px] bg-slate-900/20 m-24 mb-32 text-left ">
        <h1 className="text-7xl transition ease-in-out animate-pulse font-bold items-center flex text-left content-center text-white">
          <Medal className="w-12 h-12 text-green-500" />
          Join Arc today!
        </h1>
        <p className="ml-[00px] items-center mt-4 flex-col">
          {" "}
          The Beta testing for the app was a grand success and people really
          loved our app! <br /> Sign up now and get your first course plan for
          <span className="text-white text-bold"> FREE!</span>
        </p>
        <div className="flex flex-col p-2  l-0 gap-2">
          <FaqQues
            ques="What is Arc about?"
            answer="Arc is an AI based Course provider application, that analyses the student's infographics and recommends him personalized learning path."
          />
          <FaqQues
            ques="Where do I get the study resources?"
            answer="Arc.ai provides you with not just the learning path but also the resources you require to master the skill from your current level."
          />
          <FaqQues
            ques="What is the Fee for using Arc?"
            answer="Arc is completely free for the first use! after which a low amount of 60 INR for every course path generated, that's right! fee is less than a dollar to use."
          />
          <FaqQues
            ques="How can I set up notifications & reminders ?"
            answer="Arc handles your prep timings and sends you email & Google Calendar notifications and helps in keeping you comitted."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
// className="marquee flex shrink-0 justify-around min-w-full w-full  gap-12"
// className=" flex flex-col overflow-hidden border-2 p-12 bg-slate-800/20 w-[1800px] border-green-600/60 rounded-3xl gap-4"
