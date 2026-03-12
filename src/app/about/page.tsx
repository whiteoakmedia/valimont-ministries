import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Valimont Ministries",
  description:
    "Learn more about Jelly Valimont, widow of the late Dr. Randy Valimont.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* ── Page Hero ── */}
      <section className="bg-forest py-24 md:py-32 text-center relative overflow-hidden">
        {/* subtle decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide">
            About
          </h1>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* ── About Jelly Valimont ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text — left on desktop, below image on mobile */}
            <div className="order-2 lg:order-1">
              <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                Speaker &middot; Author &middot; Minister
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
                Jelly Valimont
              </h2>
              <div className="gold-line mb-8" />

              <div className="prose">
                <p>
                  Jelly Valimont is the widow of Dr. Randy Valimont, former
                  pastor of Griffin First Assembly, an Encounter Life Network
                  church. She was born in McMinnville, Tennessee into the home of
                  a pastor and spent her PK life growing up in Tennessee, Florida
                  and Georgia. While attending Southeastern University, she met
                  and married the love of her life, Dr. Randy Valimont. Upon
                  graduating together, they moved to Arkansas where Dr. Valimont
                  began the role of youth pastor and Jelly began teaching school.
                </p>
                <p>
                  This is also where their first daughter, Jordan, was born. In
                  1984, they followed the call of God to Toccoa, Georgia to
                  become pastors of Glad Tidings Assembly of God and to add two
                  more daughters, Danielle and Alayna into their family. They
                  ministered in Toccoa for almost 10 years, forming lifelong
                  friendships with many of their congregants.
                </p>
                <p>
                  In Toccoa, Jelly was the administrator of Little Learners
                  Preschool where she developed and managed all aspects of the
                  school including staff, parents, children, and curriculum. She
                  also operated as janitor, cook, nurse (unlicensed, of course)
                  counsellor and spiritual advisor. In addition to this, she was
                  the minister of music and the leader of women&apos;s and
                  girl&apos;s ministries for their time as lead pastors.
                </p>
                <p>
                  God began to move on the hearts of Dr. Valimont and Jelly that
                  their time in Toccoa was coming to an end and in 1993, they
                  relocated to Griffin, Georgia where Jelly continues to live.
                  During their time in Griffin, Jelly has been involved in the
                  local church in women&apos;s ministry, Celebration Choir,
                  worship teams and the ministry of costumes for which she is
                  uniquely gifted.
                </p>
                <p>
                  Jelly has been used by God to speak in the local church and at
                  conferences throughout the United States and internationally.
                  She has written two books, &lsquo;I Have Issues,&rsquo; and
                  &lsquo;Tapestry: a Story of Adoption, Acceptance, and
                  Destiny.&rsquo;
                </p>
                <p>
                  On October 31, 2019, Dr. Valimont entered into his eternal
                  rest and left behind a broken and grieving family, church
                  network, and community. Jelly and her family purposed in their
                  hearts that they would go on, continue and finish the work that
                  God has called them to do.
                </p>
                <p>
                  Jelly continues to live in Griffin with her mother and two
                  nephews for whom Dr. Valimont and Jelly became guardians after
                  the death of their parents. Jelly&apos;s heart&apos;s cry is
                  to do the will of the Father, wherever and whatever that might
                  be, to bring souls into the kingdom and to facilitate spiritual
                  health and well-being to the body of Christ. If she can do it
                  while laughing, so much the better!
                </p>
              </div>
            </div>

            {/* Image — right on desktop, top on mobile */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="/images/2022-PR-photo-1-1.jpg"
                    alt="Jelly Valimont"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* decorative accent */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decorative Divider ── */}
      <div className="flex justify-center py-4">
        <div className="gold-line" />
      </div>

      {/* ── About Dr. Randy Valimont ── */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image — left on desktop, top on mobile */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="/images/5e42f51faa49c.webp"
                    alt="Dr. Randy Valimont"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 -z-10" />
              </div>
            </div>

            {/* Text — right on desktop */}
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                In Loving Memory
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
                Dr. Randy Valimont
              </h2>
              <p className="font-serif text-lg text-charcoal/70 italic mb-2">
                June 8, 1960 &ndash; October 31, 2019
              </p>
              <div className="gold-line mb-8" />

              <div className="prose">
                <p>
                  The Rev. Dr. Randall Lane Valimont was born on June 8, 1960 in
                  Johnson City, New York and died on October 31, 2019 in Griffin,
                  Georgia. He was married to Jelly Jordan Valimont for almost 40
                  years. He and Jelly had three beautiful daughters Jordan,
                  Danielle, and Alayna, one amazing son-in-law, Praveen Bala,
                  and two grandchildren, Jaeli and Shiloh.
                </p>
                <p>
                  Dr. Valimont was a graduate of Southeastern University where he
                  received his bachelor&apos;s degree in theology, and Logos
                  University where he received both his master&apos;s degree and
                  doctorate in Pastoral Leadership. He served in many ministry
                  capacities and preached in more than 60 nations of the world.
                </p>
                <p>
                  In 1993, he received a call to become the senior pastor at
                  First Assembly of God in Griffin, Georgia, where he served for
                  26 years. The congregation grew to more than 7,000 at seven
                  separate locations. During his 25 years of pastorate, Dr.
                  Valimont raised more than $28 million for missions.
                </p>
                <p>
                  Dr. Valimont was known for his dauntless vision and passion for
                  Christ. He inspired people to live bold and innovative lives.
                  People were the most important aspect of Dr. Valimont&apos;s
                  life. He was always reaching out to the hurting, the destitute,
                  and the lonely, sharing his faith so that others could come to
                  know Jesus. He was a man of great faith and knew that nothing
                  could stop the power of God.
                </p>
                <p>
                  In the words of so many, Randy Valimont was larger than life.
                  His final sermon was entitled, &lsquo;Do We have Enough
                  Lifeboats?&rsquo; One of the core values he developed at
                  Griffin First Assembly was that one church could change the
                  world. He believed and lived this message daily until the end
                  of his life.
                </p>
                <p>
                  We, his family, will continue to do the same. God has never
                  left us, never forsaken us. We will move forward to continue
                  the legacy that Randy Valimont began and we will not be
                  defeated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
