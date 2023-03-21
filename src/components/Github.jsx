import React, { useEffect, useState } from "react";

const Github = () => {
  let [data, setData] = useState([]);
  let [searchuser, setSearchuser] = useState("i-am-ggunjan");
  let [search, setSearch] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchuser}`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setData([data]);
      });
    });
  }, [search]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  let handleChange = (e) => {
    setSearchuser(e.target.value);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-green-900 via-green-400 to-blue-900 h-[100vh] pt-14">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-10 p-5"
        >
          <input
            className="rounded-md text-center py-1 px-2 w-56 font-serif"
            type="text"
            list="connect"
            placeholder="Search yourself on Github"
            onChange={handleChange}
          />
          <button className="bg-teal-700 rounded-md  font-serif text-white px-7 py-1">
            Submit
          </button>
        </form>

        <article className="flex items-center justify-center p-[50px]">
          {data.map((value) => {
            return (
              <main className="flex flex-col gap-5" key={value.login}>
                <img
                  src={value.avatar_url}
                  width="300px"
                  alt=""
                  className="h-[300px] outline-none"
                />
                <h2 className="bg-teal-700 font-serif text-slate-50 rounded-md text-center py-1">
                  {value.login}
                </h2>
                <a
                  href={value.html_url}
                  className="bg-teal-700 text-slate-50 rounded-md text-center py-1 px-3 font-serif"
                >
                  Go to Profile
                </a>
              </main>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Github;
