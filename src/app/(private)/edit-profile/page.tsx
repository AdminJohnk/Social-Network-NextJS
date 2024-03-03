"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";

import getImageURL from "@/lib/utils";

export interface IEditProfileProps {}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EditProfile(props: IEditProfileProps) {
  const { data: session } = useSession();

  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-10 px-5 py-10 md:p-14">
      <div className="hidden w-full max-w-5xl sm:flex">
        <Button variant="ghost">
          <IoArrowBack size={18} />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>
      <div className="space-y-4 rounded-xl bg-foreground-1 px-4 py-3">
        <div className="flex-start gap-4 p-4">
          <Avatar className="size-20" src={getImageURL(session?.user.image!)} />
          <div className="flex flex-col">
            <span className="h5-bold mb-2">{session?.user.name}</span>
            <span className="small-regular text-text-2">
              @{session?.user.name}
            </span>
          </div>
        </div>
        <div
          className="uk-slider relative -mb-px px-2"
          // data-uk-slider="finite: true"
        >
          <nav className="uk-slider-container overflow-hidden rounded-xl pt-2">
            <ul
              className="uk-slider-items w-[calc(100%+10px)] text-sm font-semibold capitalize text-gray-500 dark:text-white"
              data-uk-switcher="connect: #setting_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"
            >
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  General
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  social links
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  notifications
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  manage
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  privacy
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  Alerts
                </a>
              </li>
              <li className="w-auto pr-2.5">
                <a className="inline-block border-b-2 border-transparent p-4 pt-2 aria-expanded:border-blue-500 aria-expanded:text-blue-500">
                  password
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="setting_tab"
          className="uk-switcher dark:bg-dark2 overflow-hidden rounded-xl border bg-white p-6 shadow-sm dark:border-slate-700 md:px-20 md:py-12"
        >
          <div>
            <div>
              <div className="space-y-6">
                <div className="items-center gap-10 md:flex">
                  <label className="text-right md:w-32"> Username </label>
                  <div className="flex-1 max-md:mt-4">
                    <input
                      type="text"
                      placeholder="Monroe"
                      className="w-full lg:w-1/2"
                    />
                  </div>
                </div>

                <div className="items-center gap-10 md:flex">
                  <label className="text-right md:w-32"> Email </label>
                  <div className="flex-1 max-md:mt-4">
                    <input
                      type="text"
                      placeholder="info@mydomain.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="items-start gap-10 md:flex">
                  <label className="text-right md:w-32"> Bio </label>
                  <div className="flex-1 max-md:mt-4">
                    <textarea
                      className="w-full"
                      rows={5}
                      placeholder="Inter your Bio"
                    ></textarea>
                  </div>
                </div>

                <div className="items-center gap-10 md:flex">
                  <label className="text-right md:w-32"> Gender </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0 lg:w-1/2">
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="items-center gap-10 md:flex">
                  <label className="text-right md:w-32"> Relationship </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0 lg:w-1/2">
                      <option value="0">None</option>
                      <option value="1">Single</option>
                      <option value="2">In a relationship</option>
                      <option value="3">Married</option>
                      <option value="4">Engaged</option>
                    </select>
                  </div>
                </div>

                <div className="items-start gap-10 md:flex " hidden>
                  <label className="text-right md:w-32"> Avatar </label>
                  <div className="flex flex-1 items-center gap-5 max-md:mt-4">
                    <img
                      src="assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <button
                      type="submit"
                      className="rounded-full border bg-slate-100/60 px-4 py-1 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save <span className="ripple-overlay"></span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="font-normal text-gray-400">
                <div>
                  <h4 className="text-xl font-medium text-black dark:text-white">
                    Social Links
                  </h4>
                  <p className="mt-3 font-normal text-gray-600 dark:text-white">
                    We may still send you important notifications about your
                    account and content outside of you preferred notivications
                    settings
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-blue-50 p-2 ">
                      Facebook
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full"
                        placeholder="http://www.facebook.com/myname"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-pink-50 p-2 ">
                      Instagram
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full"
                        placeholder="http://www.instagram.com/myname"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-sky-50 p-2 ">
                      Twitter
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full"
                        placeholder="http://www.twitter.com/myname"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-red-50 p-2 ">
                      Youtube
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full"
                        placeholder="http://www.youtube.com/myname"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-slate-50 p-2 ">
                      Github
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full"
                        placeholder="http://www.github.com/myname"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="items-start gap-16 md:flex">
                <label className="text-right font-semibold md:w-32">
                  Notify me when
                </label>

                <div className="interactive-effect flex-1 space-y-4 max-md:mt-5">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox1"
                        value="3"
                      />
                      <span className="ml-3"> Someone send me message </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox1"
                        value="3"
                      />
                      <span className="ml-3"> Someone liked my photo </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox2"
                        value="3"
                      />
                      <span className="ml-3"> Someone shared on my photo </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox2"
                        value="3"
                      />
                      <span className="ml-3"> Someone followed me </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox2"
                        value="3"
                      />
                      <span className="ml-3"> Someone liked my posts</span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox2"
                        value="3"
                      />
                      <span className="ml-3"> Someone mentioned me</span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        className="rounded"
                        type="checkbox"
                        checked
                        name="checkbox2"
                        value="3"
                      />
                      <span className="ml-3">
                        Someone sent me follow requset
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-6">
                <div className="items-start gap-10 md:flex">
                  <label className="w-40 text-right font-semibold">
                    Who can follow me ?
                  </label>

                  <div className="interactive-effect flex-1 space-y-2 max-md:mt-3">
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s1" checked value="1" />
                        <span className="ml-3"> Everyone</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s1" value="2" />
                        <span className="ml-3"> The People I Follow</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s1" value="3" />
                        <span className="ml-3"> No body</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="items-start gap-10 md:flex">
                  <label className="text-right font-semibold md:w-40">
                    Who can message me ?
                  </label>

                  <div className="interactive-effect flex-1 space-y-2 max-md:mt-3">
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s2" checked value="1" />
                        <span className="ml-3"> Everyone</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s2" value="2" />
                        <span className="ml-3"> The People I Follow</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s2" value="3" />
                        <span className="ml-3"> No body</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="items-start gap-10 md:flex">
                  <label className="text-right font-semibold md:w-40">
                    Status
                  </label>

                  <div className="interactive-effect flex-1 space-y-2 max-md:mt-3">
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s3" checked value="3" />
                        <span className="ml-3"> Yes</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s3" value="3" />
                        <span className="ml-3"> No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="items-start gap-10 md:flex">
                  <label className="text-right font-semibold md:w-40">
                    Show my activities ?
                  </label>

                  <div className="interactive-effect flex-1 space-y-2 max-md:mt-3">
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s4" checked value="3" />
                        <span className="ml-3"> Public</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" name="radio-s4" value="3" />
                        <span className="ml-3"> Hide</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-6">
                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Who can follow me ?
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Everyone</option>
                      <option value="2">People I Follow</option>
                    </select>
                  </div>
                </div>

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Who can message me ?
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Everyone</option>
                      <option value="2">People I Follow</option>
                      <option value="2">No body</option>
                    </select>
                  </div>
                </div>

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Show my activities ?
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Yes</option>
                      <option value="2">Now</option>
                    </select>
                  </div>
                </div>

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40"> Status </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Online</option>
                      <option value="2">Offline</option>
                    </select>
                  </div>
                </div>

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Who can see my tags?
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Everyone</option>
                      <option value="2">People I Follow</option>
                      <option value="2">No body</option>
                    </select>
                  </div>
                </div>

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Allow search engines
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Yes</option>
                      <option value="2">Now</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="text-sm font-normal text-gray-400">
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    Alerts preferences
                  </h4>
                  <p className=" mt-3">
                    We may still send you important notifications about your
                    account and content outside of you preferred notivications
                    settings
                  </p>
                </div>

                <div
                  className="mt-8 space-y-4 md:space-y-8"
                  uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 100 ;repeat: true"
                >
                  <div className="w-full" style={{ opacity: 0 }}>
                    <label className="switch flex cursor-pointer items-center justify-between gap-4">
                      <div className="hidden shrink-0 rounded-full bg-sky-100 p-2 text-sky-500 md:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1 md:pr-8">
                        <h4 className="mb-1.5 text-base font-medium text-black dark:text-white">
                          Email notifications
                        </h4>
                        <p>
                          You can receive notifications about important updates
                          and content directly to your email inbox.
                        </p>
                      </div>
                      <input type="checkbox" checked />
                      <span className="switch-button !relative"></span>
                    </label>
                  </div>

                  <div className="w-full" style={{ opacity: 0 }}>
                    <label className="switch flex cursor-pointer items-center justify-between gap-4">
                      <div className="hidden shrink-0 rounded-full bg-purple-100 p-2 text-purple-500 md:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1 md:pr-8">
                        <h4 className="mb-1.5 text-base font-medium text-black dark:text-white">
                          web notifications
                        </h4>
                        <p>
                          You can receive notifications through your
                          notifications center
                        </p>
                      </div>
                      <input type="checkbox" />
                      <span className="switch-button !relative"></span>
                    </label>
                  </div>

                  <div className="w-full" style={{ opacity: 0 }}>
                    <label className="switch flex cursor-pointer items-center justify-between gap-4">
                      <div className="hidden shrink-0 rounded-full bg-teal-100 p-2 text-teal-500 md:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1 md:pr-8">
                        <h4 className="mb-1.5 text-base font-medium text-black dark:text-white">
                          Phone notifications
                        </h4>
                        <p>
                          You can receive notifications on your phone, so you
                          can stay up-to-date even when you’re on the go
                        </p>
                      </div>
                      <input type="checkbox" checked />
                      <span className="switch-bu/tton !relative"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-6">
                <div className="items-center justify-between gap-16 max-md:space-y-3 md:flex">
                  <label className="text-right md:w-40">Current Password</label>
                  <div className="flex-1 max-md:mt-4">
                    <input
                      type="password"
                      placeholder="******"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="items-center justify-between gap-16 max-md:space-y-3 md:flex">
                  <label className="text-right md:w-40"> New password </label>
                  <div className="flex-1 max-md:mt-4">
                    <input
                      type="password"
                      placeholder="******"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="items-center justify-between gap-16 max-md:space-y-3 md:flex">
                  <label className="text-right md:w-40">Repeat password</label>
                  <div className="flex-1 max-md:mt-4">
                    <input
                      type="password"
                      placeholder="******"
                      className="w-full"
                    />
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-gray-700" />

                <div className="items-center justify-between gap-16 md:flex">
                  <label className="text-right md:w-40">
                    Two-factor authentication
                  </label>
                  <div className="flex-1 max-md:mt-4">
                    <select className="w-full !rounded-md !border-0">
                      <option value="1">Enable</option>
                      <option value="2">Disable</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="button bg-secondery max-md:flex-1 lg:px-6"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="button bg-primary text-white max-md:flex-1 lg:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
