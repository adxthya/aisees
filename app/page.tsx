import Watson from "@/components/watson";

export default function Home() {
  const integrationID = process.env.integrationID;
  const serviceInstanceID = process.env.serviceInstanceID;
  return (
    <Watson
      integrationID={integrationID}
      serviceInstanceID={serviceInstanceID}
    />
  );
}
