import { CheckIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { IProduct } from "../typing";

function Plans({ planTypes }: IProduct) {
  const { logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="object-contain cursor-pointer"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="max-w-5xl px-5 pb-12 transition-all pt-28 md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose a plan that is right for you
        </h1>
        <ul>
          <li className="planList">
            <CheckIcon className="planListIcons" /> Watch all you want. Ad-free
          </li>
          <li className="planList">
            <CheckIcon className="planListIcons" /> Recommendations just for
            you.
          </li>
          <li className="planList">
            <CheckIcon className="planListIcons" /> Change or cancel your plan
            anytime.
          </li>
        </ul>
        <div className="flex flex-col mt-4 space-y-4">
          <div className="flex items-center self-end justify-end w-full md:w-3/5">
            {<div className="planBox">standard</div>}
          </div>
          <button>Subscribe</button>
        </div>
      </main>
      {/* HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile. */}
    </div>
  );
}

export default Plans;
