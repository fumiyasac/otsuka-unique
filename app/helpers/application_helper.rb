module ApplicationHelper
	
	# 管理ツール用
  def admin_document_title
    "管理画面 | 大塚「珍しいもん」Store　-Official Blog-"
  end

  # コンテンツ用
  def contents_document_title
    @page_title + " | 大塚「珍しいもん」Store　-Official Blog-"
  end
end
