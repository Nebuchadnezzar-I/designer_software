defmodule DesignerSoftwareWeb.RedirectController do
    use DesignerSoftwareWeb, :controller

    def redirect_to_home(conn, _params) do
        redirect(conn, to: "/")
    end
end
