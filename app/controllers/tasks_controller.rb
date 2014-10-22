class TasksController < ApplicationController

  def index
    @tasks = current_user.tasks.incomplete
    @task = Task.new
  end

  def create
   @task =  current_user.tasks.create(task_params)
   render @task 
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end

end
