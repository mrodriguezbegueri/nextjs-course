import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <>
      <h1 className={'title'}>
        Ir a <Link href="/pricing">Pricing</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/index.js</code>
        </p>
    </>
  )
}

PricingPage.getLayout = function getLayout( page ) {
    return (
        <MainLayout>
            { page }
        </MainLayout>
    )
}
