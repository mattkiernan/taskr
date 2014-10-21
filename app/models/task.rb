class Task < ActiveRecord::Base

  validates :title, presence: true
  validates :description, presence: true

  def self.incomplete
    where(completed:false)
  end
 

end
