class AddAttachmentImageToBanners < ActiveRecord::Migration
  def self.up
    change_table :banners do |t|
      t.has_attached_file :image
    end
  end
 
  def self.down
    drop_attached_file :banners, :image
  end
end
