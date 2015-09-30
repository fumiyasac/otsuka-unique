class AddAttachmentImageToSlides < ActiveRecord::Migration
  def self.up
    change_table :slides do |t|
      t.has_attached_file :image
    end
  end
 
  def self.down
    drop_attached_file :slides, :image
  end
end
