import React from 'react'

function Success() {
  return (
    <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="mx-auto justify-center py-5 flex">
            <a href="/">
              <img className="h-10 w-auto" src="/logo.png" alt="" />
            </a>
          </div>

          <p className="text-base font-semibold text-green-400">200</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-600 sm:text-5xl">Payment Successful</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Thank you, your card details has been added suceessfully.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Go back home
            </a>
            <a href="https://dashboard.nobus.io" className="text-sm font-semibold text-gray-900">
              Visit nobus dashboard <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success