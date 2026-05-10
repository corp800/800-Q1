import React from "react";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Go to <a href="/main">/main</a> or{" "}
        <a href="/main/notice">/main/notice</a>.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">ㅁㄴㅇ</div>
      {Array.from({ length: 100 }, (_, i) => i).map((_, i) => (
        <React.Fragment key={i}>
          <div key={i}>{i}</div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
