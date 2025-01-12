defmodule DesignerSoftwareWeb.MainLive.Project do
    use DesignerSoftwareWeb, :live_view

    @impl true
    def mount(%{"project" => project_name}, _session, socket) do
        {:ok, assign(socket, project_name: project_name)}
    end
end
