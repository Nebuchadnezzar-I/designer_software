defmodule DesignerSoftwareWeb.CoreComponents do
    use Phoenix.Component

    @doc """
    ## Props
    - `:lines` (required): A list of strings to display.
    - `:class` (optional): Additional classes for customization.

    ## Example
    <.roll_text lines={["Line 1", "Line 2"]} class="custom-class" />
    """
    def roll_text(assigns) do
        assigns = assign_new(assigns, :class, fn -> "" end)

        ~H"""
        <div class={"overflow-hidden relative group w-fit cursor-pointer " <> @class}>
            <div class="transition-transform duration-200 ease-in-out transform group-hover:translate-y-[-50%]">
                <%= for line <- @lines do %>
                    <p><%= line %></p>
                <% end %>
            </div>
        </div>
        """
    end
end
