"use client";

import Form from "@/components/Form";
import Result from "@/components/Result";
import Alert from "@/components/Alert";
import { useState } from "react";

export default function Home() {
  const [predictResult, setPredictResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <section className="grid gap-6 mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-8 lg:px-8">
      <Alert />
      <section className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-[2fr_1fr] ">
        <Form
          predictResult={predictResult}
          setPredictResult={setPredictResult}
          loading={loading}
          setLoading={setLoading}
        />
        <Result predictResult={predictResult} loading={loading} />
      </section>
    </section>
  );
}
