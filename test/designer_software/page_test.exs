defmodule DesignerSoftware.PageTest do
  use DesignerSoftware.DataCase

  alias DesignerSoftware.Page

  describe "home" do
    alias DesignerSoftware.Page.Main

    import DesignerSoftware.PageFixtures

    @invalid_attrs %{}

    test "list_home/0 returns all home" do
      main = main_fixture()
      assert Page.list_home() == [main]
    end

    test "get_main!/1 returns the main with given id" do
      main = main_fixture()
      assert Page.get_main!(main.id) == main
    end

    test "create_main/1 with valid data creates a main" do
      valid_attrs = %{}

      assert {:ok, %Main{} = main} = Page.create_main(valid_attrs)
    end

    test "create_main/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Page.create_main(@invalid_attrs)
    end

    test "update_main/2 with valid data updates the main" do
      main = main_fixture()
      update_attrs = %{}

      assert {:ok, %Main{} = main} = Page.update_main(main, update_attrs)
    end

    test "update_main/2 with invalid data returns error changeset" do
      main = main_fixture()
      assert {:error, %Ecto.Changeset{}} = Page.update_main(main, @invalid_attrs)
      assert main == Page.get_main!(main.id)
    end

    test "delete_main/1 deletes the main" do
      main = main_fixture()
      assert {:ok, %Main{}} = Page.delete_main(main)
      assert_raise Ecto.NoResultsError, fn -> Page.get_main!(main.id) end
    end

    test "change_main/1 returns a main changeset" do
      main = main_fixture()
      assert %Ecto.Changeset{} = Page.change_main(main)
    end
  end
end
