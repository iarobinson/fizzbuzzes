# Ruby

def fizz_buzz n
  for i in 1..n
    if i % 3 == 0 && i % 5 == 0
      puts 'fizz_buzz'
    elsif i % 3 == 0
      puts 'fizz'
    elsif i % 5 == 0
      puts 'buzz'
    else
      puts i
    end
  end
end

fizz_buzz 16
