defmodule DesignerSoftwareWeb.CoreComponents do
    use Phoenix.Component

    attr :font_size, :string, default: "16px"
    attr :height, :string, default: "24px"
    attr :class, :string, default: ""
    attr :content, :string, default: "[ NOTHING STUDIO ]"

    def text_roll(assigns) do
        ~H"""
        <div class={"text-roll h-[#{@height}] text-[#{@font_size}] #{@class}"}>
            <div class={"text-roll_magic hover:-translate-y-[#{@height}]"}>
                <p>{@content}</p>
                <p>{@content}</p>
            </div>
        </div>
        """
    end
end
