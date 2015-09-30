class BannersController < ApplicationController
  before_action :set_banner, only: [:show, :edit, :update, :destroy]
	
	layout "common_format_control"
	
  # GET /control/banners
  # GET /control/banners.json
  def index
	  @banners_total_count = Banner.count
    @banners = Banner.page(params[:page]).per(ITEMS_PER_PAGE_ADMIN).order(id: :desc)
  end

  # CSVファイルをダウンロードする
  # GET /control/banners/download.csv
  def download
    @banners = Banner.order(id: :asc)
    respond_to do |format|
      format.html { redirect_to :action => 'banner_data_download', :format => 'csv' }
      format.csv  { render :content_type => 'text/csv' }
    end
  end

  # GET /control/banners/1
  # GET /control/banners/1.json
  def show
  end

  # GET /control/banners/new
  def new
    @banner = Banner.new
  end

  # GET /control/banners/1/edit
  def edit
  end

  # POST /control/banners
  # POST /control/banners.json
  def create
    @banner = Banner.new(banner_params)

    respond_to do |format|
      if @banner.save
        format.html { redirect_to @banner, notice: 'Banner was successfully created.' }
        format.json { render :show, status: :created, location: @banner }
      else
        format.html { render :new }
        format.json { render json: @banner.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /control/banners/1
  # PATCH/PUT /control/banners/1.json
  def update
    respond_to do |format|
      if @banner.update(banner_params)
        format.html { redirect_to @banner, notice: 'Banner was successfully updated.' }
        format.json { render :show, status: :ok, location: @banner }
      else
        format.html { render :edit }
        format.json { render json: @banner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /control/banners/1
  # DELETE /control/banners/1.json
  def destroy
    @banner.destroy
    respond_to do |format|
      #format.html { redirect_to banners_url, notice: 'Banner was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_banner
      @banner = Banner.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def banner_params
      params.require(:banner).permit(:title, :description, :link_url, :link_text, :link_blank, :published, :flag, :image)
    end
end
