# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.3'

gem 'rails', '~> 7.0'

gem "propshaft"

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'
# Use Puma as the app server
gem 'puma', '~> 5.0'
# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.16'

gem 'rack-contrib', '~> 2.3.0'
gem 'rails-i18n', '~> 7.0.0'

gem 'jsbundling-rails', '~> 1.2'
gem "turbo-rails", "~> 2.0"
gem "stimulus-rails", "~> 1.3"
gem "tailwindcss-rails", "~> 2.0"

gem 'imgkit'
install_if -> { RUBY_PLATFORM =~ /darwin/ } do
  gem 'wkhtmltoimage-binary'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rubocop', '~> 1.18'
end

group :development do
  gem 'listen', '~> 3.3'
  gem "erb-formatter", "~> 0.4.3"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
