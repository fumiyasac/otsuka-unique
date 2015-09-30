json.array!(@slides) do |slide|
  json.extract! slide, :id, :title, :description, :link_url, :link_text, :link_blank, :published, :flag
  json.url slide_url(slide, format: :json)
end
