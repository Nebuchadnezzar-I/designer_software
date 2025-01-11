defmodule DesignerSoftware.PageFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `DesignerSoftware.Page` context.
  """

  @doc """
  Generate a main.
  """
  def main_fixture(attrs \\ %{}) do
    {:ok, main} =
      attrs
      |> Enum.into(%{

      })
      |> DesignerSoftware.Page.create_main()

    main
  end
end
