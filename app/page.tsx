import Watson from "@/components/watson";

export default function Home() {
  const integrationID = process.env.integrationID;
  const serviceInstanceID = process.env.serviceInstanceID;
  return (
    <div className="w-screen h-screen md:px-[25vw] md:py-2">
      <Watson
        integrationID={integrationID}
        serviceInstanceID={serviceInstanceID}
      />
    </div>
  );
}
