defmodule DesignerSoftwareWeb.MainLive.Index do
    use DesignerSoftwareWeb, :live_view
    # alias DesignerSoftware.Page

    @impl true
    def mount(_params, _session, socket) do
        {:ok, assign(socket, is_active_menu: false)}
    end

    @impl true
    def handle_event("toggle-menu", _params, socket) do
        {:noreply, assign(socket, :is_active_menu, !socket.assigns.is_active_menu)}
    end
end
