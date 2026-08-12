import { Navigation5 } from '@/components/blocks/navigation-5'
import { Hero3 } from '@/components/blocks/hero-3'
import About2 from '@/components/blocks/about-2'
import Profile2 from '@/components/blocks/profile-2'
import Cta8 from '@/components/blocks/cta-8'
import Footer7 from '@/components/blocks/footer-7'

export default function PreviewAboutPage() {
  return (
    <>
      <Navigation5 />
      <Hero3 />
      <About2 displayNavigation={false} />
      <Profile2 />
      <Cta8 />
      <Footer7 />
    </>
  )
}
