class TasksController < ApplicationController

  def index
    @tasks = Task.all
    @task = Task.new
  end

  def create
    current_user.tasks.create(task_params)
    redirect_to tasks_path
  end

  def task_params
    params.require(:task).permit(:title, :description)
  end

end
