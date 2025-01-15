defmodule DesignerSoftware.Application do
    # See https://hexdocs.pm/elixir/Application.html
    # for more information on OTP Applications
    @moduledoc false

    use Application

    @impl true
    def start(_type, _args) do
        children = [
            DesignerSoftwareWeb.Telemetry,
            {DNSCluster, query: Application.get_env(:designer_software, :dns_cluster_query) || :ignore},
            {Phoenix.PubSub, name: DesignerSoftware.PubSub},
            # Start a worker by calling: DesignerSoftware.Worker.start_link(arg)
            # {DesignerSoftware.Worker, arg},
            # Start to serve requests, typically the last entry
            DesignerSoftwareWeb.Endpoint
        ]

        # See https://hexdocs.pm/elixir/Supervisor.html
        # for other strategies and supported options
        opts = [strategy: :one_for_one, name: DesignerSoftware.Supervisor]
        Supervisor.start_link(children, opts)
    end

    # Tell Phoenix to update the endpoint configuration
    # whenever the application is updated.
    @impl true
    def config_change(changed, _new, removed) do
        DesignerSoftwareWeb.Endpoint.config_change(changed, removed)
        :ok
    end
end
