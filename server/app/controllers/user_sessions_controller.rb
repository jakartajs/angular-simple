class UserSessionsController < ApplicationController
  before_action :set_user_session, only: [:show, :edit, :update, :destroy]

  # GET /user_sessions
  # GET /user_sessions.json
  def index
    @user_sessions = UserSession.all
  end

  # GET /user_sessions/1
  # GET /user_sessions/1.json
  def show
  end

  # GET /user_sessions/new
  def new
    @user_session = UserSession.new
  end

  # GET /user_sessions/1/edit
  def edit
  end

  # POST /user_sessions
  # POST /user_sessions.json
  def create
    # respond_to do |format|
    #   if @user_session.save
    #     format.html { redirect_to @user_session, notice: 'User session was successfully created.' }
    #     format.json { render action: 'show', status: :created, location: @user_session }
    #   else
    #     format.html { render action: 'new' }
    #     format.json { render json: @user_session.errors, status: :unprocessable_entity }
    #   end
    # end

    #binding.pry
    user = User.get_user(user_session_params[:username], user_session_params[:password])
    if user != nil
      session = UserSession.login(user)
      response = {
        html: '',
        json: { username: user.username, token: session.key, status: 200 }
      }
    end
    respond_to do |format|
      if user != nil
        format.html { render text: response[:html] }
        format.json { render json: response[:json] }
      else
        format.html {     render text: '', status: :unauthorized }
        format.json {     render text: '', status: :unauthorized }
      end
    end


  end

  # PATCH/PUT /user_sessions/1
  # PATCH/PUT /user_sessions/1.json
  def update
    respond_to do |format|
      if @user_session.update(user_session_params)
        format.html { redirect_to @user_session, notice: 'User session was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user_session.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_sessions/1
  # DELETE /user_sessions/1.json
  def destroy
    @user_session.destroy
    respond_to do |format|
      format.html { redirect_to user_sessions_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_session
      @user_session = UserSession.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_session_params
      # params[:user_session]
      params
    end
end
