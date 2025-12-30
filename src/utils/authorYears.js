// Author life years for displaying when quotes were said
// Format: "Author Name": "years" or "era"

export const authorYears = {
  // Ancient Philosophers
  "Socrates": "470-399 BC",
  "Aristotle": "384-322 BC",
  "Epictetus": "50-135 AD",
  "Buddha": "563-483 BC",
  "Confucius": "551-479 BC",
  "Lao Tzu": "6th century BC",
  "Marcus Aurelius": "121-180 AD",
  "Zeno of Citium": "334-262 BC",
  "Heraclitus": "535-475 BC",
  "Plato": "428-348 BC",
  "Seneca": "4 BC-65 AD",

  // Renaissance & Enlightenment
  "René Descartes": "1596-1650",
  "Edmund Burke": "1729-1797",
  "William Shakespeare": "1564-1616",
  "Francis Bacon": "1561-1626",
  "Patrick Henry": "1736-1799",
  "Benjamin Franklin": "1706-1790",
  "Voltaire": "1694-1778",
  "John Locke": "1632-1704",

  // Modern Philosophers & Thinkers
  "Friedrich Nietzsche": "1844-1900",
  "Jean-Paul Sartre": "1905-1980",
  "Søren Kierkegaard": "1813-1855",
  "Carl Jung": "1875-1961",
  "Sigmund Freud": "1856-1939",
  "Bertrand Russell": "1872-1970",
  "Simone de Beauvoir": "1908-1986",

  // Scientists & Inventors
  "Albert Einstein": "1879-1955",
  "Isaac Newton": "1643-1727",
  "Thomas Edison": "1847-1931",
  "Nikola Tesla": "1856-1943",
  "Marie Curie": "1867-1934",
  "Stephen Hawking": "1942-2018",
  "Richard Feynman": "1918-1988",
  "Leonardo da Vinci": "1452-1519",
  "Galileo Galilei": "1564-1642",

  // Tech Leaders
  "Steve Jobs": "1955-2011",
  "Bill Gates": "1955-",
  "Elon Musk": "1971-",
  "Mark Zuckerberg": "1984-",
  "Jeff Bezos": "1964-",

  // Political Leaders & Activists
  "Mahatma Gandhi": "1869-1948",
  "Martin Luther King Jr.": "1929-1968",
  "Nelson Mandela": "1918-2013",
  "Winston Churchill": "1874-1965",
  "Abraham Lincoln": "1809-1865",
  "Theodore Roosevelt": "1858-1919",
  "John F. Kennedy": "1917-1963",
  "Franklin D. Roosevelt": "1882-1945",
  "Malcolm X": "1925-1965",

  // Writers & Poets
  "Oscar Wilde": "1854-1900",
  "Mark Twain": "1835-1910",
  "Ernest Hemingway": "1899-1961",
  "Virginia Woolf": "1882-1941",
  "Leo Tolstoy": "1828-1910",
  "Fyodor Dostoevsky": "1821-1881",
  "Ralph Waldo Emerson": "1803-1882",
  "Henry David Thoreau": "1817-1862",
  "J.K. Rowling": "1965-",
  "J.R.R. Tolkien": "1892-1973",
  "C.S. Lewis": "1898-1963",
  "George Orwell": "1903-1950",
  "Aldous Huxley": "1894-1963",
  "Franz Kafka": "1883-1924",
  "Paulo Coelho": "1947-",
  "Rumi": "1207-1273",
  "Khalil Gibran": "1883-1931",
  "Maya Angelou": "1928-2014",
  "Toni Morrison": "1931-2019",
  "Dr. Seuss": "1904-1991",

  // Artists & Musicians
  "Vincent van Gogh": "1853-1890",
  "Pablo Picasso": "1881-1973",
  "Michelangelo": "1475-1564",
  "Frida Kahlo": "1907-1954",
  "Salvador Dalí": "1904-1989",
  "Bob Marley": "1945-1981",
  "John Lennon": "1940-1980",
  "Ludwig van Beethoven": "1770-1827",

  // Entrepreneurs & Business
  "Walt Disney": "1901-1966",
  "Henry Ford": "1863-1947",
  "Andrew Carnegie": "1835-1919",
  "Warren Buffett": "1930-",
  "Oprah Winfrey": "1954-",
  "Coco Chanel": "1883-1971",

  // Modern Inspirational
  "Eleanor Roosevelt": "1884-1962",
  "Helen Keller": "1880-1968",
  "Mother Teresa": "1910-1997",
  "Dalai Lama": "1935-",
  "Thich Nhat Hanh": "1926-2022",
  "Brené Brown": "1965-",
  "Bruce Lee": "1940-1973",
  "Muhammad Ali": "1942-2016",
  "Robin Williams": "1951-2014",
  "Jim Carrey": "1962-",

  // Proverbs & Unknown
  "Chinese Proverb": "Ancient",
  "African Proverb": "Ancient",
  "Japanese Proverb": "Ancient",
  "Indian Proverb": "Ancient",
  "Irish Proverb": "Ancient",
  "Unknown": "",
  "Anonymous": "",
};

export function getAuthorYears(authorName) {
  return authorYears[authorName] || null;
}
