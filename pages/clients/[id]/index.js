import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push("/clients/matthew/projecta");
    // router.push({
    //   pathname: "/clients/[id]/[clientprojectid]",
    //   query: { id: "matthew", clientprojectid: "projecta" },
    // });
  };
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
