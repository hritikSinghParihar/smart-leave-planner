// Holiday Data
const holidayData = {
  2025: [
    { date: "2025-01-26", name: "Republic Day", dayOfWeek: 0 },
    { date: "2025-02-26", name: "Maha Shivaratri", dayOfWeek: 3 },
    { date: "2025-03-14", name: "Holi", dayOfWeek: 5 },
    { date: "2025-03-31", name: "Ramzan Id", dayOfWeek: 1 },
    { date: "2025-04-10", name: "Mahavir Jayanti", dayOfWeek: 4 },
    { date: "2025-04-18", name: "Good Friday", dayOfWeek: 5 },
    { date: "2025-05-12", name: "Buddha Purnima", dayOfWeek: 1 },
    { date: "2025-06-07", name: "Bakrid", dayOfWeek: 6 },
    { date: "2025-07-06", name: "Muharram", dayOfWeek: 0 },
    { date: "2025-08-15", name: "Independence Day", dayOfWeek: 5 },
    { date: "2025-08-16", name: "Janmashtami", dayOfWeek: 6 },
    { date: "2025-09-05", name: "Milad un-Nabi", dayOfWeek: 5 },
    { date: "2025-10-02", name: "Gandhi Jayanti", dayOfWeek: 4 },
    { date: "2025-10-20", name: "Diwali", dayOfWeek: 1 },
    { date: "2025-11-05", name: "Guru Nanak Jayanti", dayOfWeek: 3 },
    { date: "2025-12-25", name: "Christmas", dayOfWeek: 4 }
  ],
  2026: [
    { date: "2026-01-26", name: "Republic Day", dayOfWeek: 1 },
    { date: "2026-03-04", name: "Holi", dayOfWeek: 3 },
    { date: "2026-03-21", name: "Ramzan Id", dayOfWeek: 6 },
    { date: "2026-03-26", name: "Rama Navami", dayOfWeek: 4 },
    { date: "2026-03-31", name: "Mahavir Jayanti", dayOfWeek: 2 },
    { date: "2026-04-03", name: "Good Friday", dayOfWeek: 5 },
    { date: "2026-05-01", name: "Buddha Purnima", dayOfWeek: 5 },
    { date: "2026-05-28", name: "Bakrid", dayOfWeek: 4 },
    { date: "2026-06-26", name: "Muharram", dayOfWeek: 5 },
    { date: "2026-08-15", name: "Independence Day", dayOfWeek: 6 },
    { date: "2026-08-26", name: "Milad un-Nabi", dayOfWeek: 3 },
    { date: "2026-09-04", name: "Janmashtami", dayOfWeek: 5 },
    { date: "2026-10-02", name: "Gandhi Jayanti", dayOfWeek: 5 },
    { date: "2026-10-20", name: "Dussehra", dayOfWeek: 2 },
    { date: "2026-11-08", name: "Diwali", dayOfWeek: 0 },
    { date: "2026-11-24", name: "Guru Nanak Jayanti", dayOfWeek: 2 },
    { date: "2026-12-25", name: "Christmas", dayOfWeek: 5 }
  ],
  2027: [
    { date: "2027-01-26", name: "Republic Day", dayOfWeek: 2 },
    { date: "2027-03-10", name: "Ramzan Id", dayOfWeek: 3 },
    { date: "2027-03-17", name: "Holi", dayOfWeek: 3 },
    { date: "2027-04-02", name: "Good Friday", dayOfWeek: 5 },
    { date: "2027-04-21", name: "Mahavir Jayanti", dayOfWeek: 3 },
    { date: "2027-05-17", name: "Bakrid", dayOfWeek: 1 },
    { date: "2027-05-26", name: "Buddha Purnima", dayOfWeek: 3 },
    { date: "2027-06-16", name: "Muharram", dayOfWeek: 3 },
    { date: "2027-08-15", name: "Independence Day", dayOfWeek: 0 },
    { date: "2027-08-16", name: "Milad un-Nabi", dayOfWeek: 1 },
    { date: "2027-08-25", name: "Janmashtami", dayOfWeek: 3 },
    { date: "2027-10-02", name: "Gandhi Jayanti", dayOfWeek: 6 },
    { date: "2027-10-09", name: "Dussehra", dayOfWeek: 6 },
    { date: "2027-10-29", name: "Diwali", dayOfWeek: 5 },
    { date: "2027-11-15", name: "Guru Nanak Jayanti", dayOfWeek: 1 },
    { date: "2027-12-25", name: "Christmas", dayOfWeek: 6 }
  ]
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const tips = [
  "Book flights and hotels at least 2-3 months in advance for popular holiday periods",
  "Friday holidays are golden - they give you automatic 3-day weekends",
  "Thursday/Tuesday holidays need just 1 leave for 4-day weekends",
  "Combining consecutive holidays can give you week-long vacations with minimal leaves",
  "Plan international trips during longer breaks, domestic trips for long weekends",
  "Check if your office gives Saturday offs - this can double your long weekends",
  "Monsoon season (June-Sep) offers cheaper travel deals",
  "Popular destinations get crowded during Diwali and Dussehra - book early!"
];

// Global state
let currentPlan = null;
let currentSortType = 'date';
let isDarkMode = false;
let userPreferences = {
  theme: 'light',
  sortPreference: 'date',
  lastCalculation: null
};

// DOM Elements
const form = document.getElementById('holidayForm');
const resultsSection = document.getElementById('resultsSection');
const inputSection = document.getElementById('inputSection');
const loadingSkeleton = document.getElementById('loadingSkeleton');
const themeToggle = document.getElementById('themeToggle');
const generateBtn = document.getElementById('generateBtn');
const testCasesToggle = document.getElementById('testCasesToggle');
const testCasesContent = document.getElementById('testCasesContent');
const totalDaysOffEl = document.getElementById('totalDaysOff');
const leaveDaysUsedEl = document.getElementById('leaveDaysUsed');
const leaveRemainingEl = document.getElementById('leaveRemaining');
const leavePlanList = document.getElementById('leavePlanList');
const allHolidaysList = document.getElementById('allHolidaysList');
const holidayYearEl = document.getElementById('holidayYear');
const tipsList = document.getElementById('tipsList');
const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const shareBtn = document.getElementById('shareBtn');
const holidaysToggle = document.getElementById('holidaysToggle');
const holidaysContent = document.getElementById('holidaysContent');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalCopyBtn = document.getElementById('modalCopyBtn');
const sortControls = document.getElementById('sortControls');
const sortButtons = document.querySelectorAll('.sort-btn');

// Event Listeners
form.addEventListener('submit', handleFormSubmit);
resetBtn.addEventListener('click', handleReset);
exportBtn.addEventListener('click', handleExport);
shareBtn.addEventListener('click', handleShare);
holidaysToggle.addEventListener('click', toggleHolidays);
testCasesToggle.addEventListener('click', toggleTestCases);
modalClose.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);
modalCopyBtn.addEventListener('click', copyToClipboard);
themeToggle.addEventListener('click', toggleTheme);

// Sort button listeners
sortButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const sortType = btn.getAttribute('data-sort');
    handleSortChange(sortType);
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', initializeApp);

// Sort Functions
function handleSortChange(sortType) {
  if (!currentPlan || sortType === currentSortType) return;
  
  currentSortType = sortType;
  userPreferences.sortPreference = sortType;
  
  // Update active button
  sortButtons.forEach(btn => {
    if (btn.getAttribute('data-sort') === sortType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Sort and re-render
  sortAndDisplayResults(currentPlan, sortType);
  showNotification(`Sorted by ${getSortLabel(sortType)}`, 'success');
}

function getSortLabel(sortType) {
  const labels = {
    'date': 'Date',
    'value': 'Best Value',
    'duration': 'Long Holidays',
    'leaves': 'Least Leaves'
  };
  return labels[sortType] || 'Date';
}

function sortOpportunities(opportunities, sortType) {
  const sorted = [...opportunities];
  
  switch(sortType) {
    case 'date':
      sorted.sort((a, b) => a.startDate - b.startDate);
      break;
    case 'value':
      // Separate leave-requiring holidays from natural weekends
      const requiresLeaves = sorted.filter(opp => opp.leaveDaysNeeded > 0);
      const noLeaves = sorted.filter(opp => opp.leaveDaysNeeded === 0);
      
      // Sort leave-requiring holidays by efficiency (descending)
      requiresLeaves.sort((a, b) => b.efficiency - a.efficiency);
      
      // Prioritize leave-requiring holidays, then natural weekends
      return [...requiresLeaves, ...noLeaves];
    case 'duration':
      sorted.sort((a, b) => b.totalDays - a.totalDays);
      break;
    case 'leaves':
      sorted.sort((a, b) => a.leaveDaysNeeded - b.leaveDaysNeeded);
      break;
  }
  
  return sorted;
}

function sortAndDisplayResults(plan, sortType) {
  // Add fade out animation
  leavePlanList.style.opacity = '0';
  leavePlanList.style.transform = 'translateY(-10px)';
  
  setTimeout(() => {
    // Sort opportunities
    const sortedOpportunities = sortOpportunities(plan.selectedOpportunities, sortType);
    
    // Clear and re-render
    leavePlanList.innerHTML = '';
    sortedOpportunities.forEach((opp, index) => {
      const item = createLeavePlanItem(opp, index, plan.availableLeaves);
      leavePlanList.appendChild(item);
    });
    
    // Fade in
    setTimeout(() => {
      leavePlanList.style.opacity = '1';
      leavePlanList.style.transform = 'translateY(0)';
    }, 50);
  }, 200);
}

// Helper Functions
function parseDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatDateShort(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getDate()} ${months[date.getMonth()]}`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDatesBetween(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }
  return dates;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isHoliday(date, holidays) {
  const dateStr = date.toISOString().split('T')[0];
  return holidays.some(h => h.date === dateStr);
}

function getHolidaysForPeriod(period) {
  const today = new Date(2025, 9, 27); // Oct 27, 2025
  let startDate, endDate, holidays = [];

  if (period === 'rest_2025') {
    startDate = today;
    endDate = new Date(2025, 11, 31);
    holidays = holidayData[2025].filter(h => parseDate(h.date) >= startDate);
  } else if (period === '2026') {
    startDate = new Date(2026, 0, 1);
    endDate = new Date(2026, 11, 31);
    holidays = holidayData[2026];
  } else if (period === '2027') {
    startDate = new Date(2027, 0, 1);
    endDate = new Date(2027, 11, 31);
    holidays = holidayData[2027];
  } else if (period === 'next_12') {
    startDate = today;
    endDate = addDays(today, 365);
    // Get holidays from 2025, 2026, and potentially 2027
    holidays = [
      ...holidayData[2025].filter(h => parseDate(h.date) >= startDate),
      ...holidayData[2026],
      ...holidayData[2027].filter(h => parseDate(h.date) <= endDate)
    ].filter(h => {
      const hDate = parseDate(h.date);
      return hDate >= startDate && hDate <= endDate;
    });
  }

  return { startDate, endDate, holidays };
}

function calculateLeaveOpportunities(holidays, availableLeaves, preference) {
  const opportunities = [];

  holidays.forEach((holiday, index) => {
    const holidayDate = parseDate(holiday.date);
    const dayOfWeek = holiday.dayOfWeek;

    // Check for consecutive holidays
    let consecutiveHolidays = [holiday];
    for (let i = index + 1; i < holidays.length; i++) {
      const nextHoliday = holidays[i];
      const nextDate = parseDate(nextHoliday.date);
      const daysDiff = (nextDate - parseDate(consecutiveHolidays[consecutiveHolidays.length - 1].date)) / (1000 * 60 * 60 * 24);
      
      if (daysDiff <= 5) {
        consecutiveHolidays.push(nextHoliday);
      } else {
        break;
      }
    }

    // If multiple consecutive holidays, calculate bridge
    if (consecutiveHolidays.length > 1) {
      const firstDate = parseDate(consecutiveHolidays[0].date);
      const lastDate = parseDate(consecutiveHolidays[consecutiveHolidays.length - 1].date);
      
      // Extend to include surrounding weekends
      let startDate = new Date(firstDate);
      let endDate = new Date(lastDate);
      
      // Extend backwards to include previous weekend
      while (startDate.getDay() !== 1 && startDate.getDay() !== 0) {
        startDate = addDays(startDate, -1);
      }
      if (startDate.getDay() === 1) {
        startDate = addDays(startDate, -2);
      }
      
      // Extend forwards to include next weekend
      while (endDate.getDay() !== 0 && endDate.getDay() !== 6) {
        endDate = addDays(endDate, 1);
      }
      if (endDate.getDay() === 6) {
        endDate = addDays(endDate, 1);
      }
      
      const allDates = getDatesBetween(startDate, endDate);
      const leaveDaysNeeded = allDates.filter(d => !isWeekend(d) && !isHoliday(d, holidays)).length;
      const totalDays = allDates.length;
      
      if (leaveDaysNeeded <= availableLeaves) {
        opportunities.push({
          startDate,
          endDate,
          totalDays,
          leaveDaysNeeded,
          holidaysIncluded: consecutiveHolidays,
          efficiency: totalDays / (leaveDaysNeeded || 1),
          type: totalDays >= 7 ? 'long' : 'weekend'
        });
      }
    }

    // Single holiday opportunities
    if (dayOfWeek === 5) { // Friday
      // Natural 3-day weekend
      const startDate = new Date(holidayDate);
      const endDate = addDays(holidayDate, 2); // Fri-Sat-Sun
      opportunities.push({
        startDate,
        endDate,
        totalDays: 3,
        leaveDaysNeeded: 0,
        holidaysIncluded: [holiday],
        efficiency: Infinity,
        type: 'weekend'
      });
    } else if (dayOfWeek === 1) { // Monday
      // Natural 3-day weekend
      const startDate = addDays(holidayDate, -2); // Sat-Sun-Mon
      const endDate = new Date(holidayDate);
      opportunities.push({
        startDate,
        endDate,
        totalDays: 3,
        leaveDaysNeeded: 0,
        holidaysIncluded: [holiday],
        efficiency: Infinity,
        type: 'weekend'
      });
    } else if (dayOfWeek === 4) { // Thursday
      // Take Friday off for 4-day weekend
      if (availableLeaves >= 1) {
        const startDate = new Date(holidayDate);
        const endDate = addDays(holidayDate, 3); // Thu-Fri-Sat-Sun
        opportunities.push({
          startDate,
          endDate,
          totalDays: 4,
          leaveDaysNeeded: 1,
          holidaysIncluded: [holiday],
          efficiency: 4,
          type: 'weekend'
        });
      }
    } else if (dayOfWeek === 2) { // Tuesday
      // Take Monday off for 4-day weekend
      if (availableLeaves >= 1) {
        const startDate = addDays(holidayDate, -3); // Sat-Sun-Mon-Tue
        const endDate = new Date(holidayDate);
        opportunities.push({
          startDate,
          endDate,
          totalDays: 4,
          leaveDaysNeeded: 1,
          holidaysIncluded: [holiday],
          efficiency: 4,
          type: 'weekend'
        });
      }
    } else if (dayOfWeek === 3) { // Wednesday
      // Option 1: Take Mon-Tue off for 5-day break
      if (availableLeaves >= 2) {
        const startDate = addDays(holidayDate, -4); // Sat-Sun-Mon-Tue-Wed
        const endDate = new Date(holidayDate);
        opportunities.push({
          startDate,
          endDate,
          totalDays: 5,
          leaveDaysNeeded: 2,
          holidaysIncluded: [holiday],
          efficiency: 2.5,
          type: 'weekend'
        });
      }
      // Option 2: Take Thu-Fri off for 5-day break
      if (availableLeaves >= 2) {
        const startDate = new Date(holidayDate);
        const endDate = addDays(holidayDate, 4); // Wed-Thu-Fri-Sat-Sun
        opportunities.push({
          startDate,
          endDate,
          totalDays: 5,
          leaveDaysNeeded: 2,
          holidaysIncluded: [holiday],
          efficiency: 2.5,
          type: 'weekend'
        });
      }
    }
  });

  // Remove duplicate opportunities (same date range)
  const uniqueOpportunities = [];
  const seen = new Set();
  
  opportunities.forEach(opp => {
    const key = `${opp.startDate.toISOString()}-${opp.endDate.toISOString()}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueOpportunities.push(opp);
    }
  });

  return uniqueOpportunities;
}

function selectOptimalPlan(opportunities, availableLeaves, preference) {
  let selectedOpportunities = [];
  let remainingLeaves = availableLeaves;
  let sortedOpportunities;

  if (preference === 'long') {
    // Maximize long breaks - sort by total days descending
    sortedOpportunities = [...opportunities].sort((a, b) => b.totalDays - a.totalDays);
  } else if (preference === 'trips') {
    // Maximize number of trips - sort by efficiency (best value first)
    sortedOpportunities = [...opportunities].sort((a, b) => b.efficiency - a.efficiency);
  } else {
    // Balanced - weighted score
    sortedOpportunities = [...opportunities].sort((a, b) => {
      const scoreA = a.totalDays * 0.6 + a.efficiency * 0.4;
      const scoreB = b.totalDays * 0.6 + b.efficiency * 0.4;
      return scoreB - scoreA;
    });
  }

  // Select non-overlapping opportunities
  sortedOpportunities.forEach(opp => {
    if (opp.leaveDaysNeeded <= remainingLeaves) {
      // Check for overlap with already selected opportunities
      const hasOverlap = selectedOpportunities.some(selected => {
        return !(opp.endDate < selected.startDate || opp.startDate > selected.endDate);
      });

      if (!hasOverlap) {
        selectedOpportunities.push(opp);
        remainingLeaves -= opp.leaveDaysNeeded;
      }
    }
  });

  // Sort chronologically
  selectedOpportunities.sort((a, b) => a.startDate - b.startDate);

  return {
    selectedOpportunities,
    totalLeavesUsed: availableLeaves - remainingLeaves,
    totalDaysOff: selectedOpportunities.reduce((sum, opp) => sum + opp.totalDays, 0),
    remainingLeaves
  };
}

function handleFormSubmit(e) {
  e.preventDefault();

  const leaveDaysInput = document.getElementById('leaveDays');
  const leaveDays = parseInt(leaveDaysInput.value);

  // Form validation
  if (isNaN(leaveDays) || leaveDays < 0 || leaveDays > 50) {
    showNotification('Please enter a valid number of leave days (0-50)', 'error');
    leaveDaysInput.focus();
    return;
  }

  const planningPeriod = document.getElementById('planningPeriod').value;
  const preference = document.querySelector('input[name="preference"]:checked').value;

  try {
    // Show loading state
    showLoadingState();

    // Simulate calculation delay for better UX
    setTimeout(() => {
      try {
        // Get holidays for selected period
        const { startDate, endDate, holidays } = getHolidaysForPeriod(planningPeriod);

        // Calculate opportunities
        const opportunities = calculateLeaveOpportunities(holidays, leaveDays, preference);

        // Select optimal plan
        currentPlan = selectOptimalPlan(opportunities, leaveDays, preference);
        currentPlan.holidays = holidays;
        currentPlan.period = planningPeriod;
        currentPlan.availableLeaves = leaveDays;

        // Save preferences
        userPreferences.lastCalculation = {
          leaveDays,
          planningPeriod,
          preference,
          timestamp: new Date().toISOString()
        };

        // Display results
        hideLoadingState();
        displayResults(currentPlan);

        // Scroll to results smoothly
        setTimeout(() => {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        showNotification('Holiday plan generated successfully!', 'success');
      } catch (error) {
        hideLoadingState();
        showNotification('Error calculating holiday plan. Please try again.', 'error');
        console.error('Calculation error:', error);
      }
    }, 1200);
  } catch (error) {
    hideLoadingState();
    showNotification('An unexpected error occurred. Please try again.', 'error');
    console.error('Form submission error:', error);
  }
}

function displayResults(plan) {
  // Update summary cards
  totalDaysOffEl.textContent = plan.totalDaysOff;
  leaveDaysUsedEl.textContent = plan.totalLeavesUsed;
  leaveRemainingEl.textContent = plan.remainingLeaves;

  // Display leave plan
  leavePlanList.innerHTML = '';
  if (plan.selectedOpportunities.length === 0) {
    leavePlanList.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-32);">No optimal leave opportunities found for your criteria. Try adjusting your available leaves or preference.</p>';
  } else {
    plan.selectedOpportunities.forEach((opp, index) => {
      const item = createLeavePlanItem(opp, index, plan.availableLeaves);
      leavePlanList.appendChild(item);
    });
  }

  // Display all holidays
  const yearText = plan.period === 'rest_2025' ? '(Rest of 2025)' : 
                   plan.period === 'next_12' ? '(Next 12 Months)' : 
                   `(${plan.period})`;
  holidayYearEl.textContent = yearText;
  
  allHolidaysList.innerHTML = '';
  const holidayListDiv = document.createElement('div');
  holidayListDiv.className = 'holiday-list';
  
  plan.holidays.forEach(holiday => {
    const item = createHolidayItem(holiday);
    holidayListDiv.appendChild(item);
  });
  
  allHolidaysList.appendChild(holidayListDiv);

  // Display tips
  tipsList.innerHTML = '';
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  // Show results section
  resultsSection.classList.remove('hidden');
  
  // Show sort controls and set active button
  if (sortControls) {
    sortButtons.forEach(btn => {
      if (btn.getAttribute('data-sort') === currentSortType) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

function createLeavePlanItem(opportunity, index, totalLeaves) {
  const div = document.createElement('div');
  div.className = 'leave-plan-item';

  const dateRange = `${formatDate(opportunity.startDate)} - ${formatDate(opportunity.endDate)}`;
  const duration = `${opportunity.totalDays} consecutive days`;
  
  let badge = '';
  if (opportunity.leaveDaysNeeded === 0) {
    badge = '<span class="badge badge--value">🎁 Natural Long Weekend</span>';
  } else if (opportunity.totalDays >= 7) {
    badge = '<span class="badge badge--long">🌟 Week-Long Break</span>';
  } else if (opportunity.efficiency >= 3.5) {
    badge = '<span class="badge badge--value">💎 Best Value</span>';
  } else {
    badge = '<span class="badge badge--weekend">🏖️ Long Weekend</span>';
  }

  const holidayNames = opportunity.holidaysIncluded.map(h => h.name).join(', ');
  
  // Calculate breakdown
  const allDates = getDatesBetween(opportunity.startDate, opportunity.endDate);
  const leaveDays = opportunity.leaveDaysNeeded; // Use the actual leave requirement
  const holidayDays = opportunity.holidaysIncluded.length;
  const weekendDays = allDates.filter(d => isWeekend(d)).length;

  // Create visual bar
  const leavePercent = (leaveDays / opportunity.totalDays) * 100;
  const holidayPercent = (holidayDays / opportunity.totalDays) * 100;
  const weekendPercent = (weekendDays / opportunity.totalDays) * 100;

  div.innerHTML = `
    <div class="leave-plan-header">
      <div class="leave-plan-dates">
        <div class="leave-plan-date-range">${dateRange}</div>
        <div class="leave-plan-duration">${duration}</div>
      </div>
      <div class="leave-plan-badges">
        ${badge}
      </div>
    </div>
    <div class="leave-plan-details">
      <div class="leave-plan-detail">
        <div class="leave-plan-detail-label">Leave Required</div>
        <div class="leave-plan-detail-value"><strong>${opportunity.leaveDaysNeeded}</strong> days</div>
      </div>
      <div class="leave-plan-detail">
        <div class="leave-plan-detail-label">Holidays Included</div>
        <div class="leave-plan-detail-value">${holidayNames}</div>
      </div>
      <div class="leave-plan-detail">
        <div class="leave-plan-detail-label">Weekends Covered</div>
        <div class="leave-plan-detail-value">${weekendDays} days</div>
      </div>
    </div>
    <div class="visual-bar">
      ${leaveDays > 0 ? `<div class="visual-bar-segment visual-bar-segment--leave" style="flex: ${leavePercent}" title="Leave: ${leaveDays} days">${leaveDays}L</div>` : ''}
      ${holidayDays > 0 ? `<div class="visual-bar-segment visual-bar-segment--holiday" style="flex: ${holidayPercent}" title="Holidays: ${holidayDays} days">${holidayDays}H</div>` : ''}
      ${weekendDays > 0 ? `<div class="visual-bar-segment visual-bar-segment--weekend" style="flex: ${weekendPercent}" title="Weekends: ${weekendDays} days">${weekendDays}W</div>` : ''}
    </div>
  `;

  return div;
}

function createHolidayItem(holiday) {
  const div = document.createElement('div');
  div.className = 'holiday-item';

  const date = parseDate(holiday.date);
  const day = date.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const dayName = dayNames[holiday.dayOfWeek];

  div.innerHTML = `
    <div class="holiday-date">
      <div class="holiday-day">${day}</div>
      <div class="holiday-month">${month}</div>
    </div>
    <div class="holiday-info">
      <div class="holiday-name">${holiday.name}</div>
      <div class="holiday-day-name">${dayName}</div>
    </div>
  `;

  return div;
}

function toggleHolidays() {
  holidaysContent.classList.toggle('hidden');
  holidaysToggle.classList.toggle('active');
}

function handleReset() {
  form.reset();
  resultsSection.classList.add('hidden');
  loadingSkeleton.classList.add('hidden');
  currentPlan = null;
  currentSortType = userPreferences.sortPreference || 'date';
  hideLoadingButton();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showNotification('Form reset successfully', 'info');
}

// Initialize App
function initializeApp() {
  // Load saved theme preference or check system preference
  const savedTheme = getSavedPreference('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    applyTheme(defaultTheme);
    savePreference('theme', defaultTheme);
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = getSavedPreference('theme');
    // Only auto-switch if user hasn't manually set a preference
    if (!savedTheme) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
    }
  });
  
  // Load saved sort preference
  const savedSort = getSavedPreference('sortPreference');
  if (savedSort) {
    currentSortType = savedSort;
    userPreferences.sortPreference = savedSort;
  }

  // Setup Intersection Observer for scroll animations
  setupScrollAnimations();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--duration-fast', '0ms');
    document.documentElement.style.setProperty('--duration-normal', '0ms');
  }

  console.log('Smart Holiday Planner initialized successfully!');
  console.log('Current theme:', isDarkMode ? 'dark' : 'light');
}

// Theme Toggle
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const theme = isDarkMode ? 'dark' : 'light';
  applyTheme(theme);
  userPreferences.theme = theme;
  savePreference('theme', theme);
  
  showNotification(`${isDarkMode ? 'Dark' : 'Light'} mode enabled`, 'info');
}

function applyTheme(theme) {
  const html = document.documentElement;
  const icon = themeToggle ? themeToggle.querySelector('.theme-toggle-icon') : null;
  
  if (theme === 'dark') {
    html.setAttribute('data-color-scheme', 'dark');
    isDarkMode = true;
    if (icon) {
      // Animate icon change
      icon.style.transform = 'rotate(180deg)';
      icon.style.opacity = '0';
      setTimeout(() => {
        icon.textContent = '☀️';
        icon.style.transform = 'rotate(360deg)';
        icon.style.opacity = '1';
      }, 150);
    }
  } else {
    html.setAttribute('data-color-scheme', 'light');
    isDarkMode = false;
    if (icon) {
      // Animate icon change
      icon.style.transform = 'rotate(180deg)';
      icon.style.opacity = '0';
      setTimeout(() => {
        icon.textContent = '🌙';
        icon.style.transform = 'rotate(360deg)';
        icon.style.opacity = '1';
      }, 150);
    }
  }
}

// In-memory preference storage (localStorage not available in sandbox)
const inMemoryStorage = {};

function savePreference(key, value) {
  inMemoryStorage[key] = value;
}

function getSavedPreference(key) {
  return inMemoryStorage[key];
}

// Loading States
function showLoadingState() {
  const btnText = generateBtn.querySelector('.btn-text');
  const btnLoader = generateBtn.querySelector('.btn-loader');
  
  if (btnText && btnLoader) {
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
  }
  generateBtn.disabled = true;
  
  resultsSection.classList.add('hidden');
  loadingSkeleton.classList.remove('hidden');
}

function hideLoadingState() {
  hideLoadingButton();
  loadingSkeleton.classList.add('hidden');
}

function hideLoadingButton() {
  const btnText = generateBtn.querySelector('.btn-text');
  const btnLoader = generateBtn.querySelector('.btn-loader');
  
  if (btnText && btnLoader) {
    btnText.classList.remove('hidden');
    btnLoader.classList.add('hidden');
  }
  generateBtn.disabled = false;
}

// Scroll Animations with Intersection Observer
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards and sections
  const animatedElements = document.querySelectorAll('.card, .summary-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Notification System
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '16px 24px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: '10000',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    animation: 'slideInRight 0.3s ease',
    maxWidth: '400px',
    wordWrap: 'break-word'
  });

  // Set background color based on type
  const colors = {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f97316',
    info: '#3b82f6'
  };
  notification.style.backgroundColor = colors[type] || colors.info;

  // Add to document
  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Toggle Test Cases
function toggleTestCases() {
  testCasesContent.classList.toggle('hidden');
  testCasesToggle.classList.toggle('active');
}

function generatePlanText() {
  if (!currentPlan) return '';

  let text = `🎯 MY HOLIDAY PLAN\n`;
  text += `${'='.repeat(50)}\n\n`;
  text += `📊 SUMMARY\n`;
  text += `Total Days Off: ${currentPlan.totalDaysOff} days\n`;
  text += `Leave Days Used: ${currentPlan.totalLeavesUsed} days\n`;
  text += `Leave Days Remaining: ${currentPlan.remainingLeaves} days\n\n`;
  text += `${'='.repeat(50)}\n\n`;
  text += `📅 PLANNED BREAKS\n\n`;

  currentPlan.selectedOpportunities.forEach((opp, index) => {
    text += `${index + 1}. ${formatDate(opp.startDate)} - ${formatDate(opp.endDate)}\n`;
    text += `   Duration: ${opp.totalDays} days\n`;
    text += `   Leave Required: ${opp.leaveDaysNeeded} days\n`;
    text += `   Holidays: ${opp.holidaysIncluded.map(h => h.name).join(', ')}\n\n`;
  });

  text += `${'='.repeat(50)}\n\n`;
  text += `Generated by Smart Holiday Planner\n`;

  return text;
}

function handleExport() {
  const text = generatePlanText();
  modalTitle.textContent = 'Export Your Holiday Plan';
  modalText.value = text;
  modal.classList.remove('hidden');
}

function handleShare() {
  const text = generatePlanText();
  modalTitle.textContent = 'Share Your Holiday Plan';
  modalText.value = text;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

function copyToClipboard() {
  modalText.select();
  document.execCommand('copy');
  
  const originalText = modalCopyBtn.textContent;
  modalCopyBtn.textContent = '✅ Copied!';
  setTimeout(() => {
    modalCopyBtn.textContent = originalText;
  }, 2000);
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape key to close modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  
  // Ctrl/Cmd + K to focus on form
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('leaveDays').focus();
  }
  
  // Ctrl/Cmd + D to toggle dark mode
  if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    e.preventDefault();
    toggleTheme();
  }
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Test Runner Functions (for demonstration)
function runTestSuite() {
  console.log('🧪 Running Smart Holiday Planner Test Suite...');
  
  const tests = [
    testHolidayCalculation(),
    testWeekendDetection(),
    testLongWeekendIdentification(),
    testLeaveOptimization(),
    testEdgeCases()
  ];
  
  const passed = tests.filter(t => t).length;
  const total = tests.length;
  
  console.log(`✅ Tests passed: ${passed}/${total}`);
  return passed === total;
}

function testHolidayCalculation() {
  try {
    const { holidays } = getHolidaysForPeriod('2026');
    console.assert(holidays.length > 0, 'Should have holidays for 2026');
    console.assert(holidays[0].name, 'Holiday should have a name');
    console.assert(holidays[0].date, 'Holiday should have a date');
    console.log('✓ Holiday calculation test passed');
    return true;
  } catch (error) {
    console.error('✗ Holiday calculation test failed:', error);
    return false;
  }
}

function testWeekendDetection() {
  try {
    const saturday = new Date(2026, 0, 3); // Jan 3, 2026 is Saturday
    const monday = new Date(2026, 0, 5); // Jan 5, 2026 is Monday
    console.assert(isWeekend(saturday), 'Saturday should be weekend');
    console.assert(!isWeekend(monday), 'Monday should not be weekend');
    console.log('✓ Weekend detection test passed');
    return true;
  } catch (error) {
    console.error('✗ Weekend detection test failed:', error);
    return false;
  }
}

function testLongWeekendIdentification() {
  try {
    const { holidays } = getHolidaysForPeriod('2026');
    const opportunities = calculateLeaveOpportunities(holidays, 20, 'balanced');
    console.assert(opportunities.length > 0, 'Should find opportunities');
    console.log('✓ Long weekend identification test passed');
    return true;
  } catch (error) {
    console.error('✗ Long weekend identification test failed:', error);
    return false;
  }
}

function testLeaveOptimization() {
  try {
    const { holidays } = getHolidaysForPeriod('2026');
    const opportunities = calculateLeaveOpportunities(holidays, 10, 'balanced');
    const plan = selectOptimalPlan(opportunities, 10, 'balanced');
    console.assert(plan.totalLeavesUsed <= 10, 'Should not exceed available leaves');
    console.assert(plan.totalDaysOff >= plan.totalLeavesUsed, 'Should optimize days off');
    console.log('✓ Leave optimization test passed');
    return true;
  } catch (error) {
    console.error('✗ Leave optimization test failed:', error);
    return false;
  }
}

function testEdgeCases() {
  try {
    const { holidays } = getHolidaysForPeriod('2026');
    const opportunities = calculateLeaveOpportunities(holidays, 0, 'balanced');
    const plan = selectOptimalPlan(opportunities, 0, 'balanced');
    console.assert(plan.totalLeavesUsed === 0, 'Should handle 0 leaves');
    console.log('✓ Edge cases test passed');
    return true;
  } catch (error) {
    console.error('✗ Edge cases test failed:', error);
    return false;
  }
}

// Run tests on load (in development)
if (window.location.search.includes('test=true')) {
  setTimeout(() => {
    console.log('\n' + '='.repeat(50));
    runTestSuite();
    console.log('='.repeat(50) + '\n');
  }, 1000);
}