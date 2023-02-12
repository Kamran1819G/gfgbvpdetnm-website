import React from 'react'
import '../css/Home.css'
import BlogSection from '../components/home/blogsection/BlogSection'
import LandingSection from '../components/home/landingsection/LandingSection'
import PastEvents from '../components/home/pastevents/PastEvents'
import UpcomingEvent from '../components/home/upcomingsection/UpcomingEvent'

function Home() {
  return (
    <>
    <LandingSection
        chaptername="BVPDETNM"
        description="A community of students where we provide the coding culture for
                the students who are interested in Computer Science and other
                core technical competencies. We will provide you the
                opportunities to enhance your coding skills and take them to the
                next level."
        link="/joincommunity"
      />
    <UpcomingEvent />
    <PastEvents />
    <BlogSection />
    </>
  )
}

export default Home