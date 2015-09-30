class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :title
      t.text :description
      t.string :link_url
      t.string :link_text
      t.integer :link_blank
      t.date :published
      t.integer :flag

      t.timestamps
    end
  end
end
