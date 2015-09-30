crumb :root do
  link 'TOP', root_path
end

crumb :control_banners do
  link '管理画面TOP', "/control/panel"
  link 'バナー管理', nil
end

crumb :control_banners_add do
  link '管理画面TOP', "/control/panel"
  link 'バナー管理', banners_path
  link 'バナー追加', nil
end

crumb :control_banners_edit do
  link '管理画面TOP', "/control/panel"
  link 'バナー管理', banners_path
  link 'バナー編集', nil
end

crumb :control_banners_show do
  link '管理画面TOP', "/control/panel"
  link 'バナー管理', banners_path
  link 'バナー詳細', nil
end

# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).