defmodule DesignerSoftwareWeb.MainLive.PrivPo do
    use DesignerSoftwareWeb, :live_view

    @impl true
    def mount(_params, _session, socket) do
        {:ok, assign(socket, [])}
    end
end
