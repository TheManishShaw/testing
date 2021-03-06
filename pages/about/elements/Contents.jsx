import React from 'react'
import Image from 'next/image';
const Contents = () => {
  return (
    <div className="container xl:px-12 lg:px-10  md:px-8 sm:px-4 px-4 py-14 mx-auto">
      <h2 className="text-3xl font-bold underline underline-offset-8 mb-5">
        About Tecblic
      </h2>
      <p className="py-1 text-zinc-600 text-lg">
        At tecblic, we assist organizations in taking a digital transformation
        leap by building sustainable technological support mechanisms and
        innovative business transformations.
      </p>
      <p className="py-1 text-zinc-600 text-lg">
        We are passionate to create your success story by transforming the
        organization’s digital identity and presence.
      </p>
      <p className="py-1 text-zinc-600 text-lg">
        Tecblic understands your business and churns out redefined business
        intelligence and data science solutions treating your entrepreneurial
        aspirations as core values. We are a technology company with human touch
        and excellence mastered. we are committed to transforming businesses by
        combining research, technology, and sustainable innovation that drive
        on-time deliveries.
      </p>
      <h2 className="text-3xl font-bold mb-1 mt-3">
        Our DNA is innovation integrated
      </h2>
      <p className="py-1 text-zinc-600 text-lg">
        We are committed to transforming businesses by combining research,
        technology, and sustainable innovation that drive on-time deliveries. We
        are a technology company with human touch and excellence mastered.
      </p>
      <h2 className="text-3xl font-bold mb-1 mt-3">Our Strength</h2>
      <p className="py-1 text-zinc-600 text-lg">
        We assist organizations to take a digital transformation leap by
        building sustainable technological support mechanisms and innovative
        business transformation.
      </p>
      <h2 className="text-3xl font-bold mb-1 mt-3">Founders</h2>
      <p className="py-1 text-zinc-600 text-lg">
        Our success is owned by minds that work with us, from professional
        research executives, coders, app developers, designers, strategy
        planners and up to content writers, we possess each species that allows
        your work to get on and off the floor before the expected deadlines. To
        point out what makes our team unique, it’s our artistic approach towards
        the problems that require scientific solutions.
      </p>
      {/* <Founder
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover  lg:rounded-t-none lg:rounded-l text-center bg-shinoj overflow-hidden"
        about="Mr. shinoj nair co-founder of the company, having nearly 15+ years of experience in the it industry. He is an eminent individual who has a vision of bridging the gap between business requirements and the technology. Mr. shinoj nair has been coming from a technology background and provides a culture of learning and amazing opportunities to individuals to grow. Over the years, he has been helping companies go from being smbs to enterprises."
        name="Shinoj Nair"
        designation="Founder"
      />
      <Founder1
        className="h-48 lg:h-auto lg:w-56 flex-none bg-cover text-center bg-heena overflow-hidden"
        about="With more than 10 years of experience in software development and project management, she collaborates with the teams and ensures smooth delivery of the projects. She has a strong creative vision with an understanding of business objectives and proven expertise in concept development."
        name="Heena Nair"
        designation="Founder"
      /> */}
      <div className="container w-100 lg:w-5/5 mx-auto flex flex-col my-8">
        <div
          v-for="card in cards"
          className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg mt-4 w-100 mx-2"
        >
          <div className="h-72 w-auto md:w-1/2">
            <Image
              className="inset-0 h-full w-full object-cover object-top"
              src="/assets/img/shinoj1.JPEG"
              width={500}
              height={400}
              alt="Shinoj"
            />
          </div>

          <div className="w-full py-4 xl:px-6 px-1 text-gray-800 flex flex-col">
            <h3 className="font-semibold text-3xl leading-tight truncate">
              Shinoj Nair
            </h3>
            <h4 className="text-2xl font-semibold">Founder</h4>
            <p className="py-1 text-zinc-600 text-lg">
              Mr. shinoj nair co-founder of the company, having nearly 15+ years
              of experience in the it industry. He is an eminent individual who
              has a vision of bridging the gap between business requirements and
              the technology. Mr. shinoj nair has been coming from a technology
              background and provides a culture of learning and amazing
              opportunities to individuals to grow. Over the years, he has been
              helping companies go from being smbs to enterprises.
            </p>
          </div>
        </div>
      </div>
      <div className="container w-100 lg:w-5/5 mx-auto flex flex-col mb-10">
        <div
          v-for="card in cards"
          className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg   mt-4 w-100 mx-2"
        >
          <div className="w-full py-4 xl:px-6 px-1 text-gray-800 flex flex-col">
            <h3 className="font-semibold text-3xl leading-tight truncate">
              Heena Nair
            </h3>
            <h4 className="text-2xl  font-semibold">Founder</h4>
            <p className="py-1 text-zinc-600 text-lg">
              With more than 10 years of experience in software development and
              project management, she collaborates with the teams and ensures
              smooth delivery of the projects. She has a strong creative vision
              with an understanding of business objectives and proven expertise
              in concept development.
            </p>
          </div>
          <div className="h-72 w-auto md:w-1/2">
            <Image
              className="inset-0 h-full w-full object-cover object-top"
              src="/assets/img/heena.jpg"
              width={500}
              height={400}
              alt="Heena"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contents;