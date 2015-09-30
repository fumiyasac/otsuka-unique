json.array!(@banners) do |banner|
  json.extract! banner, :id, :title, :description, :link_url, :link_text, :link_blank, :published, :flag
  json.url banner_url(banner, format: :json)
end
