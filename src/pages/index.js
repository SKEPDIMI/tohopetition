import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("a senior at Tohopekaliga High School");
  const [status, setStatus] = useState(1);

  return (
  <Layout>
    <SEO title="Home" />
    <h1>Tohopekaliga 2020 Graduation</h1>
    <h2>Petition Email Portal</h2>
    <em>Click here to view <a target="_blank" href="https://www.change.org/p/tohopekaliga-high-school-administration-having-a-graduation-ceremony-for-the-tohopekaliga-class-of-2020-students?recruiter=1123312854&utm_source=share_petition&utm_medium=copylink&utm_campaign=tap_basic_share&utm_term=G%3ESearch%3ESAP%3EUS%3ENonBrand%3EExact">the petition </a><strong>(over 200 signatures, and counting!)</strong></em>
    <p></p>
    <blockquote>
      "Our school, like others, has tried to make an alternative event. Toho’s idea of a ceremony like parade of cars is not well thought out and quite frankly is not what we would like as our graduation. Their idea is not safe."
    </blockquote>
    <p>
      I'm going to keep this simple. This website will generate for you a template with your personal information, in order for students, and parents of students, <strong>to contact Tohopekaliga staff, and influence the upcoming, class of 2020, graduation ceremony.</strong>
    </p>
    {status === 1 && <div>
      <p>
        It's easy to do, and you will be <strong>directly helping</strong> in making a change. Here's how it works:
      </p>
      <ol>
      <li>Enter your name</li>
      <li>Copy the generated message</li>
      <li>Send the message to the provided staff email addresses</li>
      </ol>
      <p>Simple, no? Get started by filling in the form below. 👇👇👇</p>
    </div>
  }

    {status === 1 && <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "2em",
      }}
    >
      <form onSubmit={(e) => {e.preventDefault(); setStatus(2)}}>
        <p><label>Enter your Full Name</label></p>
        <input type="text" required placeholder="John E. Smith" onChange={e => setName(e.currentTarget.value)} value={name}></input>
        <p><label>Choose descriptor</label></p>
        <select required onChange={e => setDesc(e.currentTarget.value)} value={desc}>
          <option value="a senior at Tohopekaliga High School">Senior Student</option>
          <option value="a student at Tohopekaliga High School">Student</option>
          <option value="a parent of a student at Tohopekaliga High School">Parent</option>
          <option value="a peer of one of your senior students at Tohopekaliga High School">Peer or friend of student</option>
        </select>
        <button type="submit">
          GENERATE MESSAGE
        </button>
      </form>
    </div>
    }

    {status === 2 && (
      <div>
        <h3>Generated Message (Copy the text below)</h3>
        <textarea
          style={{
            width: '100%',
            maxHeight: '920px',
            minHeight: '10em',
            padding: "0 1.5em",
          }}
          value={`
            To whom it may concern,

            My name is ${name}, I'm ${desc}. I am writing this on behalf of the Class of 2020. It is obvious that due to current events, a decision was made so that the Tohopekaliga Class of 2020 would not be receiving a traditional graduation ceremony and instead, a drive-by one. To hear this was not only heartbreaking, but utterly devastating. Over the past couple of months, things have been taken away from them that were out of anybody’s control: GradBash, prom, Decision Day, etc, and we fully understand why this happened. There are some things, however, that can be controlled, with graduation being one of them. The Class of 2020 deserves nothing less than to walk across the stage and have their names spoken out so that each student is recognized for their individual work, efforts and development throughout the years. Other schools in the district, including ones that we attended before coming to Tohopekaliga,are holding staggered graduations in which their students are still able to walk. The Tohopekaliga Class of 2020 simply asks that you listen to us and that we get to do the same.

            Thank you,
            ${name}
          `}
        >
        </textarea>

        <hr/>
        <p>Copy and send the message above to the following emails, by clicking on them. Go Tigers!</p>

        <h2><strong>District Email (sdoccrml@osceola.k12.fl.us)</strong></h2>
        <a href="mailto:sdoccrml@osceola.k12.fl.us">Click to email Disctrict Email</a> 

        <h2><strong>Superintendent Debra Pace's Email (debra.pace@osceolaschools.net)</strong></h2>
        <a href="mailto:debra.pace@osceolaschools.net">Click to email Superintendent's Email</a> 

        <h2><strong>Tohopekaliga Principal's Email (David.Phelps@osceolaschools.net)</strong></h2>
        <a href="mailto:David.Phelps@osceolaschools.net">Click to email David Phelps' Email</a> 

        <h2><strong>Tohopekaliga Vice Principal's Email (Christopher.Todd@osceolaschools.net)</strong></h2>
        <a href="mailto:Christopher.Todd@osceolaschools.net">Click to email Christopher Todd's Email</a> 

      </div>
    )}
    

  </Layout>
  )
}

export default IndexPage
