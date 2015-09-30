class Banner < ActiveRecord::Base

  #添付ファイルアップロードに関する設定
  has_attached_file :image,
    :styles => {
      :banner_sample => "300x80#"
    },
    :storage        => :s3,
    :s3_permissions => :private,
    :s3_credentials => "#{Rails.root}/config/s3.yml",
    :path           => ":class/:attachment/:id/:style.:extension"
  
  #データに関するバリデーション
  validates :title, presence: true
  validates :description, presence: true
  validates :link_url, presence: true, format: URI::regexp(%w(http https))
  validates :link_blank, presence: true
  validates :published,	presence: true
  validates :flag, presence: true  
  
  #画像ファイルに関するバリデーション
  validates_attachment_content_type :image, 
    :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  
  validates_attachment_size :image,
    :less_than => 2.megabytes
  
  #S3の画像ファイルURLを取得する
  def authenticated_image_url(style)
    image.s3_object(style).url_for(:read, :secure => true)
  end
	
end
