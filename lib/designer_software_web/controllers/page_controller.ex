defmodule DesignerSoftwareWeb.PageController do
    use DesignerSoftwareWeb, :controller

    def home(conn, _params) do
        render(conn, :home, layout: false)
    end
end
