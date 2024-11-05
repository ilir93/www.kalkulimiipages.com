import React from 'react';
import Calculator from './components/Calculator';
import { ArrowRight, Calculator as CalcIcon, Info, DollarSign } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Kalkulimi i Pages</h1>
          <p className="mt-2 text-gray-600">
            Llogaritni pagën tuaj bruto dhe neto për Kosovë dhe Shqipëri me kalkulatorin tonë të përditësuar
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Calculator />

        <section className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold mb-6">Kalkulimi i Pages në Kosovë dhe Shqipëri</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="mb-4">
              Kalkulimi i pagës është një proces i rëndësishëm për çdo punonjës dhe punëdhënës. Në platformën tonë,
              ju mund të llogaritni me saktësi pagën tuaj bruto dhe neto, duke marrë parasysh të gjitha kontributet
              dhe tatimet sipas legjislacionit aktual të Kosovës dhe Shqipërisë.
            </p>

            <h3 className="text-xl font-semibold mb-3">Sistemi i Taksave në Kosovë</h3>
            <p className="mb-4">
              Në Kosovë, sistemi i taksave është progresiv dhe ndahet në këto shkallë:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>0-80€: 0% tatim</li>
              <li>80-250€: 4% tatim</li>
              <li>250-450€: 8% tatim</li>
              <li>Mbi 450€: 10% tatim</li>
            </ul>
            <p className="mb-6">
              Kontributet pensionale në Kosovë janë 5% nga punëmarrësi dhe 5% nga punëdhënësi,
              duke krijuar një total prej 10% të pagës bruto për sigurime pensionale.
            </p>

            <h3 className="text-xl font-semibold mb-3">Sistemi i Taksave në Shqipëri</h3>
            <p className="mb-4">
              Në Shqipëri, kontributet sociale dhe shëndetësore llogariten si më poshtë:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sigurimet shoqërore: 9.5% nga punëmarrësi</li>
              <li>Sigurimet shëndetësore: 1.7% nga punëmarrësi</li>
              <li>Kontributi total: 11.2% nga paga bruto</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">Si të përdorni kalkulatorin e pagës?</h2>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <ol className="list-decimal list-inside space-y-4">
              <li>Zgjidhni shtetin (Kosovë ose Shqipëri)</li>
              <li>Vendosni shumën e pagës suaj</li>
              <li>Zgjidhni nëse shuma është Bruto apo Neto</li>
              <li>Rezultatet do të shfaqen automatikisht</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mb-4">Pyetje të Shpeshta (FAQ)</h2>
          <div className="space-y-6 mb-8">
            <details className="bg-white rounded-lg shadow p-6">
              <summary className="font-semibold cursor-pointer">
                Çfarë është paga bruto?
              </summary>
              <p className="mt-2">
                Paga bruto është shuma totale e pagës para se të zbriten tatimet dhe kontributet.
                Kjo është shuma bazë mbi të cilën llogariten të gjitha kontributet dhe tatimet.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6">
              <summary className="font-semibold cursor-pointer">
                Çfarë është paga neto?
              </summary>
              <p className="mt-2">
                Paga neto është shuma përfundimtare që punëmarrësi merr në dorë, pasi janë zbritur
                të gjitha tatimet dhe kontributet e detyrueshme sipas ligjit.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6">
              <summary className="font-semibold cursor-pointer">
                Si llogariten kontributet pensionale?
              </summary>
              <p className="mt-2">
                Kontributet pensionale ndryshojnë sipas shtetit. Në Kosovë është 5% + 5%, ndërsa
                në Shqipëri është 9.5% për sigurimet shoqërore nga punëmarrësi.
              </p>
            </details>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Informacion i rëndësishëm</h2>
            <p className="mb-4">
              Të dhënat e përdorura në këtë kalkulator bazohen në legjislacionin aktual dhe burimet zyrtare:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Kosovë: <a href="https://www.atk-ks.org/" className="text-blue-600 hover:underline">Administrata Tatimore e Kosovës</a></li>
              <li>Shqipëri: <a href="https://www.dap.gov.al" className="text-blue-600 hover:underline">Departamenti i Administratës Publike</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Llogaritja e Pagave në Kosovë</h3>
              <p>
                Sistemi i taksave në Kosovë është dizajnuar për të qenë progresiv dhe i drejtë për të gjithë punëtorët.
                Me një shkallëzim të kujdesshëm të normave tatimore nga 0% deri në 10%, sistemi siguron që punëtorët
                me të ardhura më të ulëta të kenë një barrë më të vogël tatimore. Kalkulatori ynë i pagave për Kosovë
                përfshin të gjitha ndryshimet e fundit në legjislacionin tatimor, duke përfshirë normat e reja të
                tatimit në të ardhura personale dhe kontributet e detyrueshme pensionale.
              </p>
              <p>
                Për punëdhënësit në Kosovë, kuptimi i saktë i detyrimeve tatimore është thelbësor për menaxhimin e
                burimeve njerëzore dhe përputhshmërinë ligjore. Kalkulatori ynë ndihmon në planifikimin e buxhetit
                dhe llogaritjen e kostos totale të punësimit, duke marrë parasysh si kontributet e punëdhënësit
                ashtu edhe ato të punëmarrësit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Llogaritja e Pagave në Shqipëri</h3>
              <p>
                Sistemi i sigurimeve shoqërore dhe shëndetësore në Shqipëri është strukturuar për të ofruar mbrojtje
                sociale gjithëpërfshirëse për punëtorët. Me një normë totale kontributesh prej 11.2% për punëmarrësin,
                sistemi siguron mbulim për pensione, shërbime shëndetësore dhe përfitime të tjera sociale. Kalkulatori
                ynë i specializuar për Shqipërinë merr parasysh të gjitha aspektet e legjislacionit aktual të punës
                dhe sigurimeve shoqërore.
              </p>
              <p>
                Për profesionistët e burimeve njerëzore dhe kontabilitetit në Shqipëri, llogaritja e saktë e pagave
                është thelbësore për përputhshmërinë me ligjet e punës dhe rregulloret tatimore. Kalkulatori ynë
                ofron një zgjidhje të shpejtë dhe të besueshme për llogaritjen e pagave bruto dhe neto, duke
                përfshirë të gjitha zbritjet dhe kontributet e detyrueshme.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm mb-2">
              Disclaimer: Informacioni i ofruar në këtë faqe është vetëm për qëllime ilustruese.
              Mos merrni vendime të mëdha financiare pa u konsultuar me një specialist të kualifikuar.
            </p>
            <p className="text-sm">
              Të dhënat janë marrë nga faqet zyrtare: ATK (Kosovë) dhe DAP (Shqipëri).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;